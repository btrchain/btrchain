import React ,{useState} from 'react'
import './TalkToUs.css'
import instance from '../../axios'

export default function TalkToUs() {

 const [name ,setName] = useState('')
 const [email ,setEmail] = useState('')
 const [mobile ,setMobile] = useState('')
 const [choseOption ,setChoseOption] = useState('')
 const [text ,setText] = useState('')
 

const submit= async(e)=>{
    e.preventDefault()
 try {
    if (name && email && /^\d{10}$/.test(mobile) && choseOption && text) {
      const res = await instance.post('/contactus',{name,email,mobile,choseOption,text})
      window.alert(res.data?.message)
    } else {
         window.alert('Please all details')
    }
   
 } catch (error) {
   console.log(error.message) 
 }

}
 

    return (
        <div>
            <section id="banner">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* <div className="col-md-8">
                            <h2>What is Lorem Ipsum and why do we use it?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div> */}
                        <div className="col-md-8">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="/">Talk to us</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div id="VisaInquiry" className="container tab-pane active">
                                    <div className="get-quotes">
                                        <form onSubmit={(e)=>submit(e)}>
                                            <div className="form-row row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Your Name</label>
                                                    <input type="type" className="form-control" placeholder="Name"  required 
                                                    onChange={(e)=>setName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Your Email Id</label>
                                                    <input type="email" className="form-control" placeholder="Email Id"  required
                                                    onChange={(e)=>setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Mobile Number</label>
                                                    <input type="number" className="form-control" placeholder="Mobile Number" required 
                                                    onChange={(e)=>setMobile(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Choose  Enquiry Type</label>
                                                    <select className="form-control" onChange={(e)=>setChoseOption(e.target.value)}>
                                                        <option>Please Select</option>
                                                        <option>Business</option>
                                                        <option>Development</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                            <div className="col pb-3">
                                                <label for="exampleFormControlTextarea1">Your Question</label>
                                                <textarea className="form-control p-3" id="exampleFormControlTextarea1" rows="3"
                                               onChange={(e)=>setText(e.target.value)}
                                                ></textarea>
                                            </div>
                                            </div>
                                            <button className="btn btn-warning float-right" type="submit">Submit</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
