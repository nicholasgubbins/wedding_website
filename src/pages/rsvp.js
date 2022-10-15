import React from "react";
import Layout from "../components/layout";
import FormData from "../components/formData";
import FormDataDetails from "../components/formDataattending";
import FormDataDetailsTacos from "../components/formTacos";

import { Success, Failure } from "../components/rsvp-success";

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

// export default class Rsvp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toggle: true,
//       togglefood: true,
//       error: false,
//       submitted: false,
//       data: {
//         Name: "",
//         Attending:"no",
//         Email: "",
//         Nbr: "",
//         nattending:0,
//         welcomedinner: "false",
//         taco1:0,
//         taco2:0,
//         taco3:0
//       }
//     };

//     this.handleGuest = this.handleGuest.bind(this);
//     this.handleFood = this.handleFood.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

// //   handleSubmit(e) {
// //     e.preventDefault();

// //     const form = e.target;
// //     const data = encode({
// //       "form-name": form.getAttribute("name"),
// //       ...this.state.data
// //     });

// //     // no-cache=1 ensures Gatsby doesn't delegate the form to a service worker instead of Netlify
// //     fetch("/?no-cache=1", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
// //       body: data
// //     })
// //       .then(() => this.setState({ submitted: true }))
// //       .catch(error => {
// //         console.log(error);
// //         this.setState({ error: true });
// //       });
// //   }

// //   handleChange = e => {
// //     const { name, value } = e.target;
// //     this.setState(prevState => ({
// //         data: {
// //           ...prevState.data,
// //           [name]: value

// //       }
// //     }));
// //   };

// //   handleGuest = e => {
// //     const { name, value } = e.target;
// //     console.log('asdfasdfasdf')
// //     console.log(e.target.name)

// //     switch(name){
// //       case 'attending_no':
// //         return (
// //           this.setState(prevState => {
// //             console.log(prevState.data.nattending)
// //             return {
// //               data:{...prevState.data,
// //                     nattending:0},
// //               toggle: !prevState.toggle,
// //               togglefood: false
// //             };
// //           })
// //         )
// //         case 'attending':
// //           return (
// //             this.setState(prevState => {
// //               return {
// //                 data: {
// //                   ...prevState.data,
// //                 },
// //                 toggle: !prevState.toggle,
// //               };
// //             })
// //           )
// //         default :

// //     }
// //   }

// //   handleFood = e => {
// //     const { name, value } = e.target;
// //     if(e.target.value > 0){
// //     this.setState(prevState => ({
// //         data: {
// //           ...prevState.data,
// //           [name]: value

// //       },
// //       togglefood: true
// //     }));
// //   }else{
// //     this.setState(prevState => ({
// //       data: {
// //         ...prevState.data,
// //         [name]: value

// //     },
// //     togglefood: false
// //     }));
// //   }
// //   }

// //   componentDidMount() {
// //     // we need the full form to be there at first load for the Netlify form robot, but we hide it after component mounts.
// //     this.setState({ toggle: false, togglefood: false });
// //   }

// //   render() {
// //     const { data } = this.state;

// //     const first = {
// //       name: data.Name,
// //       attending: data.Attending
// //     };

// //     const second = {
// //       nattending:data.nattending,
// //       email: data.Email,
// //       phnbr: data.Nbr,
// //       welcomedinner: data.Welcome
// //     };
// //     const third = {
// //       taco1: data.taco1,
// //       taco2: data.taco2,
// //       taco3: data.taco3
// //     };

// //     const formName = "rsvp-2019";

// //     if (this.state.error) return <Failure location={this.props.location} />;
// //     if (this.state.submitted) return <Success location={this.props.location} />;
// //     return (
// //       <Layout title="RSVP" location={this.props.location}>
// //         <article>
// //           <section>
// //             <p>
// //              {this.state.togglefood}
// //             </p>

// // {            <form
// //               data-netlify="true"
// //               data-netlify-honeypot="bot-field"
// //               method="post"
// //               action=""
// //               name={formName}
// //               id="rsvp"
// //               onSubmit={this.handleSubmit}
// //             >

// //               <input type="hidden" name="form-name" value={formName} />
// //               <p hidden>
// //                 <label>
// //                   Don’t fill this out:{" "}
// //                   <input name="bot-field" onChange={this.handleChange} />
// //                 </label>
// //               </p>

// //               <FormData
// //                 handleChange={this.handleChange}
// //                 values={first}
// //                 pronoun="you"
// //                 adjective="your"
// //               />
// //               <div>
// //                 Is anyone from your party planning to attend?
// //                 <ul>
// //                   <li>
// //                     <input
// //                       type="radio"
// //                       id="guest_no"
// //                       name="attending_no"
// //                       value={this.Attending}
// //                       onChange={this.handleGuest}
// //                       checked={!this.state.toggle}
// //                     />
// //                     <label htmlFor="guest_no">No, nobody is able to make it</label>
// //                   </li>
// //                   <li>
// //                     <input
// //                       type="radio"
// //                       id="guest_yes"
// //                       name="attending"
// //                       value={this.Attending}
// //                       onChange={this.handleGuest}
// //                       checked={this.state.toggle}
// //                     />
// //                     <label htmlFor="guest_yes">Yes</label>
// //                   </li>
// //                 </ul>
// //               </div>
// //               {this.state.toggle &&
// //                 <FormDataDetails
// //                   handleChange={this.handleChange}
// //                   handleChangenum={this.handleFood}
// //                   values={second}
// //                 />
// //               }
// //               {this.state.togglefood &&
// //                 (<FormDataDetailsTacos
// //                   handleChange={this.handleChange}
// //                   values={third}
// //                   people = {second.nattending}
// //                 />)
// //               }
// //               {((this.state.data.nattending*3 > (Number(this.state.data.taco1) + Number(this.state.data.taco2)+Number(this.state.data.taco3)))
// //               && this.state.data.nattending != 0 ) &&
// //                <p>Add more tacos to submit!</p>}
// //               {((this.state.data.nattending*3 < (Number(this.state.data.taco1) + Number(this.state.data.taco2)+Number(this.state.data.taco3)))
// //               && this.state.data.nattending != 0 ) &&
// //                <p>Error, Too many tacos selected (3 per person for now please!)</p>}

// //               {((this.state.data.nattending*3 == (Number(this.state.data.taco1) + Number(this.state.data.taco2)+Number(this.state.data.taco3)))
// //               || this.state.data.nattending == 0 ) &&
// //                <input type="submit" value="I promise I'll be good" />}

// //             </form> }
// //           </section>
// //         </article>
// //       </Layout>
// //     );
// //   }
// }

export default (props) => (
  <Layout title="RSVP" location={props.location}>
    <article id="Coming Soon">
      <section>
        <h3 style={{ textAlign: "center" }}>Coming Soon</h3>
      </section>
    </article>
  </Layout>
);
