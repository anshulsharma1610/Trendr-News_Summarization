import UserTable from "./UserTable";
import NewsTable from "./NewsTable";
import FormComponent from "./FormComponent";
import FormSubscription from "./FormSubscription";


const AdminCRUD = () => {
  return (
    <div style={{ justifyContent: 'center'}}>
        <UserTable/>
        <NewsTable/>
        {/* <FormSubscription/> */}
    </div>
  );
}

export default AdminCRUD;
