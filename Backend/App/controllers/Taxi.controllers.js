const client = require("../config/database.config");

module.exports.addTaxi=async (req, res) => {
    const {
        regNo,
      modelyear  ,
  driver,
  owner_id 
}=req.body;


 
const data = await client.query(
    "INSERT INTO taxi ( regNo ,modelyear ,driver , owner_id ) VALUES ($1,$2,$3,$4)",
         [regNo, modelyear, driver,owner_id ],
         (err) => {
                        if (err) {
                          flag = 0;
                          console.error(err);
                          return res.status(500).json({
                            error: "Database error",
                          });
                        } else {
                          flag = 1;
                          res
                            .status(200)
                            .send({ message: "added to database" });
                            console.message;
                        }
                      }
  );
 
};
// try {
//     const data = await client.query(
//       "SELECT * FROM taxi WHERE regNo= $1",
//       [regNo]
//     );
//     const taxiData = data.rows;
//     if (taxiData.length != 0) {
//       return res.status(400).json({
//         error: "Taxi already there, No need to enter again",
//       });
//     } else {

//         client.query(
//             `INSERT INTO taxi ( regNo , driver , modelyear) VALUES ($1,$2,$3)`,
//             [regNo, driver, modelyear],
//             (err) => {
//               if (err) {
//                 flag = 0;
//                 console.error(err);
//                 return res.status(500).json({
//                   error: "Database error",
//                 });
//               } else {
//                 flag = 1;
//                 res
//                   .status(200)
//                   .send({ message: "added to database" });
//               }
//             }
//           );
//         }
    
    
//         var flag = 1;
    
    
//       } catch (err) {
//         console.log(err);
//         res.status(500).json({
//           error: "Database error while registring user!",
//         });
//       }
//     };
//     exports.getTaxiDetails = async (req, res) => {
//         await client.query(
//           `SELECT * FROM taxi;`,
//           (error, results) => {
//             if (error) {
//               //catch
//               throw error;
//             }
      
//             res.status(200).json(results.rows);
//           } //important
//         );
//       };
//       exports.getScoff = async (req, res) => {
//         await client.query(
//           `SELECT * FROM scoff WHERE scoff_id= $1;`,[scoff_id],
//           (error, results) => {
//             if (error) {
//               //catch
//               throw error;
//             }
      
//             res.status(200).json(results.rows);
//           } //important
//         );
//       };

      
      