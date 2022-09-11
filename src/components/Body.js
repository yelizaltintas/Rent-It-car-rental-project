import React, {Component} from "react";
import "./Cars.css";

  class Cars extends Component {

    render() {
      return (
        <div className = "body">
            <section className="home" id="home">
                    <div className="text">
                        <h3><span> Looking </span> to <br/>rent a car</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur <br/> adipisicing.</p>
                        <div className="app-store">
                            <img src="/images/" alt=""/>
                            <img src="/images/" alt=""/>
                        </div>
                    </div>

                <div className="form-container">
                    <form action="#">
                        <div className="input-box">
                        <span>Araba Markası:</span>
                            <select className="input" name="cars" id="car">
                                <option value="javascript">Mercedes</option>
                                <option value="php">BMW</option>
                                <option value="java">Volvo</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <span>Kiralama Tarihi:</span>
                            <input type="date" name="first_date" id="fd" />
                        </div>
                        <div className="input-box">
                            <span>Bitiş Tarihi:</span>
                            <input type="date" name="last_date" id="ld" />
                        </div>
                        <div className="input-box">
                        <span> </span>
                            <input type="submit" name="" id="" className="btn" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
      );
    }
  }

export default Cars;




            