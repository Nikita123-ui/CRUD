function ReadList({ data, onEdit, onDelete }) {
  const incomeTotal = data.reduce((prevVal, currVal) => {
    return (prevVal = prevVal + currVal.income);
  }, 0);
  return (
    <div className="ReadList">
      <h3>Read List</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Age</th>
            <th scope="col">Income</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>{item.income}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => onEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <h3>Total Income: {incomeTotal}</h3>
    </div>
  );
}

export default ReadList;
