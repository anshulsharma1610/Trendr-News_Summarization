import UserTable from "./UserTable";
import NewsTable from "./NewsTable";
import FormComponent from "./FormComponent";
import FormSubscription from "./FormSubscription";


// The AdminNews component renders a NewsTable component wrapped in a div.

const AdminNews = () => {
  return (
    <div style={{ justifyContent: 'center'}}>
        <NewsTable/>
    </div>
  );
}

export default AdminNews;
