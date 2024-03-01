import { useEffect, useState } from "react";
import "./style.css";
import { getDatabase, ref, onValue } from "firebase/database";
// import { Outlet } from "react-router-dom";
export default function AdminUsersInfo() {
  const [mydata, setMydata] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "users");

    onValue(
      dbRef,
      (snapshot) => {
        const myarray = [];
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          myarray.push({ ...childData });

          // ...
        });
        setMydata([...myarray]);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  return (
    <>
      <div>
        <div>
          <div className="displayflex">
            <div className="virtualtablecss">
              <span>First Name</span>
              <div>
                {mydata.map((item, i) => (
                  <>
                    <div key={i} className="datacss">
                      {item.firstname}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="virtualtablecss">
              <span>Last Name</span>
              <div>
                {mydata.map((item, i) => (
                  <>
                    <div key={i} className="datacss">
                      {item.lastname}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="virtualtablecss">
              <span>Interested</span>
              <div>
                {mydata.map((item, i) => (
                  <>
                    <div key={i} className="datacss">
                      {item.picked === "Yes" ? (
                        <div className="positive">Yes</div>
                      ) : (
                        <div className="negitive">No</div>
                      )}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="virtualtablecss">
              <span>Email</span>
              <div>
                {mydata.map((item, i) => (
                  <>
                    <div key={i} className="datacss">
                      {item.email}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="virtualtablecss">
              <span>Phone</span>
              <div>
                {mydata.map((item, i) => (
                  <>
                    <div key={i} className="datacss">
                      {item.phone}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
