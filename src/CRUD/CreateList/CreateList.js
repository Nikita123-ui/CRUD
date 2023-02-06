import { useEffect, useState } from 'react';

function CreateList({
  dataObjCallBackProp,
  editUserDetail,
  isEdit,
  updateDataCallBack,
}) {
  const json = {
    firstName: '',
    lastName: '',
    age: null,
    income: null,
    id: null,
  };

  const [formObj, setFormObj] = useState(json);

  useEffect(() => {
    setFormObj(editUserDetail);
  }, [editUserDetail]);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormObj({
      ...formObj,
      [name]:
        name === 'firstName' || name === 'lastName'
          ? value
          : Number(value)
          ? parseInt(value)
          : '',
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formObj.firstName &&
      formObj.lastName &&
      formObj.age &&
      formObj.income &&
      formObj.id
    ) {
      dataObjCallBackProp(formObj);
      setFormObj(json);
    }
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateDataCallBack(formObj);
    setFormObj(json);
  };

  return (
    <div className="CreateList">
      <h3>{isEdit ? 'Update List' : 'Create List'}</h3>
      <form onSubmit={isEdit ? updateHandler : submitHandler}>
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter First Name"
            name="firstName"
            value={formObj.firstName}
            onChange={changeHandler}
          />
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Last Name"
            name="lastName"
            value={formObj.lastName}
            onChange={changeHandler}
          />
        </div>
        <div class="form-group">
          <label>Age</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Age"
            name="age"
            value={formObj.age === null ? '' : formObj.age}
            onChange={changeHandler}
          />
        </div>
        <div class="form-group">
          <label>Income</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Income"
            name="income"
            value={formObj.income === null ? '' : formObj.income}
            onChange={changeHandler}
          />
        </div>
        <div class="form-group">
          <label>Id</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Id"
            name="id"
            value={formObj.id === null ? '' : formObj.id}
            onChange={changeHandler}
          />
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          {isEdit ? 'update' : 'submit'}
        </button>
      </form>
    </div>
  );
}
export default CreateList;
