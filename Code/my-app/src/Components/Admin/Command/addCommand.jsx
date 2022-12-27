import { useState, useRef, useEffect } from "react";
import { useMutation, ApolloError } from "@apollo/client";
import { Add_Command } from "../../../Api/Mutation/MutationCommand";

export default function AddCommand() {
 
  const [AddCommand,{data,error}] = useMutation(Add_Command);
  const [command, SetCommand] = useState({
    prixTotal: 0,
    quantite: 0,
    idUser: 0,
  });




  // useEffect(() => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log(data);
  //   }
  // }, [data, error]);

 

  const idUser = useRef();
  const prix = useRef();
  const quantite = useRef();
  // console.log(prix.current.value)
  // console.log(idUser.current.value)
  // console.log(quantite.current.value)
  // console.log(AddCommand );

  // function onchange(e) {
  //   SetCommand(() => ({
  //     ...command,
  //     [e.target.name]: e.target.value,
  //   }));
  //   console.log(command);
  // }

  const onchange = (e) => {
    SetCommand(() => ({
      ...command,
      [e.target.name]: e.target.value,
    }));  
        console.log(command);
 
  };

  function handleSubmit(e) {
    try {
      const { prixTotal, quantite, idUser } = command;

      e.preventDefault()
      AddCommand({
        variables: { prixTotal:prixTotal, quantite:quantite, idUser:idUser},
      }).then(res=>{
        console.log(data)
      })
      // console.log(command);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
          <h4 className="text-lg font-medium capitalize mb-4">
            Profile information
          </h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label for="first">Prix Total</label>
                <input
                  type="text"
                  name="prixTotal"
                  value={command.prixTotal}
                  className="input-box"
                  ref={prix}
                 onChange={onchange}

                />
              </div>
              <div>
                <label for="last">Quantite</label>
                <input
                  type="text"
                  name="quantite"
                  ref={quantite}
                //  onChange={(e) => SetQuantite(e.target.value)}


                  value={command.quantite}
                  onChange={onchange}
                  className="input-box"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label for="birthday">id user</label>
                <input
                  type="text"
                  name="idUser"
                  className="input-box"
                  value={command.idUser}
                  ref={idUser}
                //  onChange={(e) => SetIdUser(e.target.value)}

                  onChange={onchange}
                />
              </div>
   
            </div>
           
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
             
            >
              save changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
