import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>To Do | Dashboard</title>
            </Helmet>
            <h3 className="text-center text-2xl font-medium my-5">Welcome to Dashboard</h3>
            <div className="flex justify-end">
                <Link to="/addTask" className="btn btn-primary">Add Task</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table text-center my-20 ">
                    {/* head */}
                    <thead>
                        <tr className="text-base text-black">
                            <th>Title</th>
                            <th className="w-1/3">Description</th>
                            <th>Deadlines</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>Web Development</th>
                            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis!</td>
                            <td>25-12-2023</td>
                            <td>High</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;