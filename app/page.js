import Navigation from "@/app/component/navigation";
import SideBar from "@/app/component/sideBar";

const mainTitle = "Article Guide";

export default function Home() {
  return (
   <>
                   <div className="container-fluid px-4">
                       <h1 className="mt-4">Article Guide</h1>
                       <ol className="breadcrumb mb-4">
                           <li className="breadcrumb-item active">Help your writing</li>
                       </ol>
                       <div className="row">

                       </div>
                       <div className="row">
                           <div className="col-xl-6">
                               <div className="card mb-4">
                                   <div className="card-header">
                                       <i className="fas fa-chart-area me-1"></i>
                                       Area Chart Example
                                   </div>
                                   <div className="card-body">
                                       <canvas id="myAreaChart" width="100%" height="40"></canvas>
                                   </div>
                               </div>
                           </div>
                           <div className="col-xl-6">
                               <div className="card mb-4">
                                   <div className="card-header">
                                       <i className="fas fa-chart-bar me-1"></i>
                                       Bar Chart Example
                                   </div>
                                   <div className="card-body">
                                       <canvas id="myBarChart" width="100%" height="40"></canvas>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
       </>
      )
}
