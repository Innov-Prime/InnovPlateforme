import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../components/About/Main'
import Contact from '../components/Contact/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import Navbar from '../components/Navbar/Main'

import RealisationDetails1 from '../components/Project/RealisationDetails/Main1'
import RealisationDetails2 from '../components/Project/RealisationDetails/Main2'
import RealisationDetails3 from '../components/Project/RealisationDetails/Main3'

import Realisations from '../components/Project/Realisations/Main'

import CyberSecurity from '../components/Services/CyberSecurity/Main'
import InfrastructurePlan from '../components/Services/InfrastructurePlan/Main'
import ITConsultant from '../components/Services/ITConsultant/Main'
import ITManagement from '../components/Services/ITManagement/Main'
import QATesting from '../components/Services/QATesting/Main'

import Service1 from '../components/Services/Services1/Main'
import Service2 from '../components/Services/Services2/Main'
import Service3 from '../components/Services/Services3/Main'

import Team from '../components/Team/Main'
import Solution from '../components/Solution/Main';

import SolutionDetails1 from '../components/SolutionDetails/Main1';
import SolutionDetails2 from '../components/SolutionDetails/Main2';
import SolutionDetails3 from '../components/SolutionDetails/Main3';

import Service from '../components/Service/Main'

import SimpleNavBar from '../components/Navbar/Simple'


const Routing = () => {
    const [homepage, sethomepage] = useState(false)
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/"){
        sethomepage(true)
      }else{
        sethomepage(true)
      }
    }, [location])
    
    return (
        <>
            {homepage? <Navbar />: <SimpleNavBar/>}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                
                <Route path="/service-01" element={<Service1 />} />
                <Route path="/service-02" element={<Service2 />} />
                <Route path="/service-03" element={<Service3 />} />

                <Route path="/cyber-security" element={<CyberSecurity />} />
                <Route path="/it-management" element={<ITManagement />} />
                <Route path="/qa-testing" element={<QATesting />} />
                <Route path="/infrastructure-plan" element={<InfrastructurePlan />} />
                <Route path="/it-consultant" element={<ITConsultant />} />

                <Route path="/realisations" element={<Realisations />} />
                <Route path="/realisation-details1" element={<RealisationDetails1 />} />
                <Route path="/realisation-details2" element={<RealisationDetails2 />} />
                <Route path="/realisation-details3" element={<RealisationDetails3 />} />


                <Route path="/contact" element={<Contact />} />

                <Route path="/solutions" element={<Solution />} />
                <Route path="/solution-details1" element={<SolutionDetails1 />} />
                <Route path="/solution-details2" element={<SolutionDetails2 />} />
                <Route path="/solution-details3" element={<SolutionDetails3 />} />

                <Route path="/service" element={<Service />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Routing