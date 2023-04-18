import UserTable from "./UserTable";
import NewsTable from "./NewsTable";
import FormComponent from "./FormComponent";


const AdminCRUD = () => {
  return (
    <div style={{ justifyContent: 'center'}}>
        <UserTable/>
        <NewsTable/>
        {/* <FormComponent/>  */}
    </div>
  );
}

export default AdminCRUD;
