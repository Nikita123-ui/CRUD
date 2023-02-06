import React, { useState } from 'react';
import CreateList from './CreateList/CreateList';
import ReadList from './ReadList/ReadList';
const json = [
  {
    firstName: 'Poonam',
    lastName: 'Madhwani',
    age: 30,
    id: 1,
    income: 50000,
  },
  {
    firstName: 'Nisha',
    lastName: 'Gupta',
    age: 35,
    id: 2,
    income: 70000,
  },
  {
    firstName: 'Sanat',
    lastName: 'Gupta',
    age: 28,
    id: 3,
    income: 30000,
  },
  {
    firstName: 'Rohit',
    lastName: 'Madhwani',
    age: 26,
    id: 4,
    income: 25000,
  },
  {
    firstName: 'Nikita',
    lastName: 'Varyani',
    age: 25,
    id: 5,
    income: 25000,
  },
];
function Crud() {
  const [list, setList] = useState(json);
  const [editUserDetail, setEditUserDetail] = useState({
    firstName: '',
    lastName: '',
    age: '',
    income: '',
    id: '',
  });

  const [isEdit, setIsEdit] = useState(false);

  const dataObjCallBack = (obj) => {
    const findIndexItem = list.findIndex((item) => item.id === obj.id);
    if (findIndexItem === -1) {
      setList([...list, obj]);
    }
  };

  const updateDataCallBack = (updateItem) => {
    setList(
      list.map((item) => (item.id === updateItem.id ? updateItem : item))
    );
    setIsEdit(false);
  };

  const handleEdit = (editItem) => {
    setEditUserDetail(editItem);
    setIsEdit(true);
  };

  const deleteUser = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="Crud">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <CreateList
              dataObjCallBackProp={dataObjCallBack}
              editUserDetail={editUserDetail}
              isEdit={isEdit}
              updateDataCallBack={updateDataCallBack}
            />
          </div>
          <div className="col-sm">
            <ReadList data={list} onEdit={handleEdit} onDelete={deleteUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crud;
