import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch } from 'react-redux';
import { addPost } from "../../features/post/postSlice";
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: "",
        body: "",
      });
      const { title, body} = formData;

      const onChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(formData))
        navigate("/")
        
      }

  return (
    <section className="return container">
  <div className="">
    <section className="w-100">
      <div className="row">
        <div className="col-12">
          <div className="card text-black" style={{ borderRadius: '25px' }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center text-body h1 fw-bold mb-5 mt-4">
                    Add a New Post
                  </p>

                  <form>
                    {/* Title Input */}
                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="formTitle"
                          className="form-control"
                          placeholder="Post Title"
                          name="title"
                          value={title}
                          onChange={onChange}
                        />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: '9px' }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: '68.8px' }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Input */}
                    <div className="d-flex flex-row align-items-center mb-4">
                      <div className="form-outline flex-fill mb-0">
                        <textarea
                          id="formContent"
                          className="form-control"
                          placeholder="Post Content"
                          rows="5"
                          name="body"
                          value={body}
                          onChange={onChange}
                        ></textarea>
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: '9px' }}
                          ></div>
                          <div
                            className="form-notch-middle"
                            style={{ width: '68.8px' }}
                          ></div>
                          <div className="form-notch-trailing"></div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                        type="button"
                        className="btn btn-warning btn-lg"
                        onClick={onSubmit}
                      >
                        Add Post
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-12 col-xl-5 d-flex align-items-center justify-content-center order-1 order-lg-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300.52818" height="300.69425" viewBox="0 0 498.52818 556.69425" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/"><path d="m82.66443,55.51429c0-26.40981,21.40939-47.81931,47.81931-47.81931s47.81942,21.40939,47.81942,47.81931c0,21.4186-14.08263,39.54567-33.49277,45.6335l-9.24433,61.0938-47.12619-39.27181s10.18073-12.96771,15.64041-27.5896c-12.90411-8.56359-21.41585-23.21796-21.41585-39.86588Z" fill="#e09093" stroke-width="0"/><path d="m9.78325,412.1067l11.85349-83.91894,25.57162,16.87615-16.64005,71.12942c3.07403,4.42918,4.40127,10.55492,3.15439,16.89681-2.18176,11.0967-11.39504,18.62843-20.57844,16.82283-9.18348-1.80562-14.85931-12.26486-12.67755-23.36156,1.24697-6.34187,4.79477-11.50918,9.31664-14.44477l-.0001.00006Z" fill="#e09093" stroke-width="0"/><path d="m244.05055,405.54114l-11.85349-83.91894-25.57162,16.87615,16.64005,71.12942c-3.07403,4.42918-4.40127,10.55492-3.15439,16.89681,2.18176,11.0967,11.39504,18.62843,20.57844,16.82283,9.18348-1.80562,14.85931-12.26486,12.67755-23.36156-1.24697-6.34187-4.79477-11.50918-9.31664-14.44477l.0001.00006Z" fill="#e09093" stroke-width="0"/><path d="m143.923,112.28313l-55.80725,8.20695v14.88306s-47.6003-8.3175-54.16586,32.71724v101.76617l-22.97946,101.76617,29.54502,6.56556,36.93127-108.33173,14.1803,13.43152h73.86254l17.71561-13.43152,23.09064,91.91783,34.46919-13.13112-17.8637-85.35227s8.01536-106.69034-29.73661-123.10424c-37.75197-16.4139-37.75197-11.48973-37.75197-11.48973l-11.48973-16.4139Z" fill="#cacaca" stroke-width="0"/><path d="m91.39853,282.98767l-6.56556,18.05529s-49.24169,47.6003-39.39336,170.70454l160.8562-4.92417s22.97946-131.31118-31.18641-169.06315l-9.86148-14.77251h-73.84939Z" fill="#2f2e43" stroke-width="0"/><path d="m67.31069,118.34375s2.23301,16.94178,22.92167,17.49501c27.97796.74825,41.96715,1.12233,41.96704,1.12233,0,0-35.47668-86.33684-20.88918-76.61039s53.48746-31.04991,53.48746-31.04991l11.47808,21.52696s27.42188-9.93004-2.96867-34.24621c0,0-36.26038-28.03362-74.75516-11.19935-38.49477,16.83427-31.24134,112.96157-31.24134,112.96157h.00011Z" fill="#090814" stroke-width="0"/><path d="m372.19124,555.8277l-229.11968-62.92096c-5.44237-1.49459-8.65318-7.13784-7.15884-12.57934L248.80378,69.24713c1.49435-5.4415,7.13697-8.65342,12.57934-7.15884l229.11968,62.92096c5.44237,1.49459,8.65318,7.13784,7.15884,12.57934l-112.89106,411.08027c-1.49435,5.4415-7.13697,8.65342-12.57934,7.15884Z" fill="#fff" stroke-width="0"/><path d="m372.19124,555.8277l-229.11968-62.92096c-5.44237-1.49459-8.65318-7.13784-7.15884-12.57934L248.80378,69.24713c1.49435-5.4415,7.13697-8.65342,12.57934-7.15884l229.11968,62.92096c5.44237,1.49459,8.65318,7.13784,7.15884,12.57934l-112.89106,411.08027c-1.49435,5.4415-7.13697,8.65342-12.57934,7.15884Z" fill="none" stroke="#2f2e41" stroke-miterlimit="10"/><path d="m390.16386,401.53078l-188.19911-51.68333c-6.14967-1.68883-9.77924-8.06534-8.09042-14.21501l42.86507-156.08841c1.68883-6.14967,8.06597-9.77813,14.21564-8.08931l188.19911,51.68333c6.14967,1.68883,9.7775,8.06486,8.08868,14.21453l-42.86507,156.08841c-1.68883,6.14967-8.06423,9.77861-14.2139,8.08979Z" fill="#cacaca" stroke-width="0"/><path d="m307.10239,156.17849l-51.13286-14.04213c-2.62537-.72098-4.17466-3.44336-3.45392-6.06786l3.26403-11.88559c.72098-2.62537,3.44336-4.17466,6.06873-3.45368l51.13286,14.04213c2.62363.7205,4.17292,3.44288,3.45194,6.06825l-3.26403,11.88559c-.72074,2.6245-3.44312,4.17379-6.06675,3.45329Z" fill="#cacaca" stroke-width="0"/><path d="m310.4912,118.73984l-45.45182-12.482c-2.22468-.61094-3.53616-2.91673-2.92546-5.14054l2.6837-9.7724c.61094-2.22468,2.9161-3.53727,5.14078-2.92633l45.45182,12.482c2.22468.61094,3.53616,2.91673,2.92522,5.14142l-2.6837,9.7724c-.6107,2.22381-2.91586,3.5364-5.14054,2.92546Z" fill="#cacaca" stroke-width="0"/><path d="m380.24341,176.26451l-51.13286-14.04213c-2.62537-.72098-4.17466-3.44336-3.45392-6.06786l3.26403-11.88559c.72098-2.62537,3.44336-4.17466,6.06873-3.45368l51.13286,14.04213c2.62363.7205,4.17292,3.44288,3.45194,6.06825l-3.26403,11.88559c-.72074,2.6245-3.44312,4.17379-6.06675,3.45329Z" fill="#cacaca" stroke-width="0"/><path d="m453.38443,196.35054l-51.13286-14.04213c-2.62537-.72098-4.17466-3.44336-3.45392-6.06786l3.26403-11.88559c.72098-2.62537,3.44336-4.17466,6.06873-3.45368l51.13286,14.04213c2.62363.7205,4.17292,3.44288,3.45194,6.06825l-3.26403,11.88559c-.72074,2.6245-3.44312,4.17379-6.06675,3.45329Z" fill="#cacaca" stroke-width="0"/><path d="m191.59224,410.30828c-8.36042-2.29594-13.29539-10.96627-10.99921-19.32756s10.96714-13.29515,19.32756-10.99921,13.29539,10.96627,10.99921,19.32756-10.96714,13.29515-19.32756,10.99921Z" fill="#6c63ff" stroke-width="0"/><path d="m320.55702,471.62392l-144.49811-39.68214c-3.93544-1.08075-6.25661-5.16075-5.1761-9.09532s5.15988-6.25685,9.09532-5.1761l144.49811,39.68214c3.93544,1.08075,6.25661,5.16075,5.1761,9.09532s-5.15988,6.25685-9.09532,5.1761Z" fill="#cacaca" stroke-width="0"/><path d="m314.34539,497.73582l-144.49811-39.68214c-3.93544-1.08075-6.25661-5.16075-5.1761-9.09532s5.15988-6.25685,9.09532-5.1761l144.49811,39.68214c3.93544,1.08075,6.25661,5.16075,5.1761,9.09532s-5.15988,6.25685-9.09532,5.1761Z" fill="#cacaca" stroke-width="0"/><path d="m255.50791,509.39558l-91.87226-25.23c-3.93544-1.08075-6.25661-5.16075-5.1761-9.09532s5.15988-6.25685,9.09532-5.1761l91.87226,25.23c3.93544,1.08075,6.25661,5.16075,5.1761,9.09532-1.08051,3.93457-5.15988,6.25685-9.09532,5.1761Z" fill="#cacaca" stroke-width="0"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</section>

  )
}

export default AddPost