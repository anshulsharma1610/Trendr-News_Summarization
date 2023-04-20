import UserTable from "./UserTable";
import NewsTable from "./NewsTable";
import FormComponent from "./FormComponent";
import FormSubscription from "./FormSubscription";


// The  code defines a  component that renders an admin dashboard with a user table, 
// form.

const AdminCRUD = () => {
  return (
    <div style={{ justifyContent: 'center'}}>
        <UserTable/>
    </div>
  );
}

export default AdminCRUD;
