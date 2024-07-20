import React from "react";
import Header from "./component/header";
import MainContent from "./component/maincontent";
import Footer from "./component/footer";

function parentChild (){
    return(
        <div className="">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
export default parentChild;