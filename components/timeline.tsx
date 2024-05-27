import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface ITimeline {
    projectDate: string,
    projectName: string,
    projectDescription: string
}

const TimelineData : ITimeline[] = [
    {
        projectDate: "February 2024 - July 2024",
        projectName: "Sparepart Management System v2 | PT. Gandum Mas Kencana",
        projectDescription: "Sparepart Management integration to AX 2012 R2 using ASP.NET Web API and Flutter (Dynamics AX 2012 R2 | ERP | X++ | C# | Dart)"
    },
    {
        projectDate: "November 2023 - February 2024",
        projectName: "AXFinMobile | PT. Gandum Mas Kencana",
        projectDescription: "Journal Payment integration to AX 2012 R2 using ASP.NET Web API and Flutter (Dynamics AX 2012 R2 | ERP | X++ | C# | Dart)"
    },
    {
        projectDate: "June 2023 - July 2023",
        projectName: "Dynamics AX 2012 R3 | PT. Mega Akses Persada (Fiberstar)",
        projectDescription: "Data forensics (Dynamics AX 2012 R3 | ERP | X++)"
    },
    {
        projectDate: "April 2022 - April 2023",
        projectName: "Dynamics 365 Finance and Operations | PT. Mitra Pinasthika Mustika Rent",
        projectDescription: "AX 2012 R3 Migration to Dynamics 365 Finance and Operations (Dynamics 365 Platform | ERP | X++)"
    },
    {
        projectDate: "September 2021 - Februari 2022",
        projectName: "Price Calc | PT. Mitra Pinasthika Mustika Rent",
        projectDescription: "Car Rental Price Calculator App (Blazor WebAssembly | .Net 5 | C#)"
    },
    {
        projectDate: "April 2021 - Agustus 2021",
        projectName: "API Gateway | PT. Gunung Raja Paksi",
        projectDescription: "ASP.Net Core API Gateway with CMS (ASP.Net Core | .Net Core 2.1 | C#)"
    },
    {
        projectDate: "December 2020 - December 2020",
        projectName: "Report Transfer Order & Transactional Demand | PT. Indotruck Utama",
        projectDescription: "ERP Custom Development (Dynamics 365 Platform | ERP | AL Language)"
    },
    {
        projectDate: "January 2020 - December 2020",
        projectName: "Dynamics 365 Business Central | PT. Alliance One Indonesia",
        projectDescription: "ERP Change Request (Dynamics AX 2012 R3 | ERP | X++)"
    },
    {
        projectDate: "November 2020 - December 2020",
        projectName: "Dynamics 365 Talent | PT. Intikom Berlian Mustika",
        projectDescription: "Microsoft Talent:Attract Custom Development (Dynamics 365 Platform)"
    },
    {
        projectDate: "September 2020 - October 2020",
        projectName: "Dynamics 365 Business Central | PT. Saritama Food Processing",
        projectDescription: "ERP Custom Development (Dynamics 365 Platform | ERP | AL Language)"
    },
    {
        projectDate: "September 2020 - October 2020",
        projectName: "Dynamics 365 Finance and Operations | PT. Mitra Pinasthika Mustika Rent, HO",
        projectDescription: "Assessment Project (Dynamics 365 Platform | ERP | X++)"
    },
    {
        projectDate: "July 2020 - December 2020",
        projectName: "Dynamics 365 Human Resource | PT. Intikom Berlian Mustika",
        projectDescription: "Human Resource Custom Development (Dynamics 365 Platform)"
    },
    {
        projectDate: "February 2020 - September 2020",
        projectName: "Dynamics 365 Business Central | PT. Karanganyar Indo Auto System",
        projectDescription: "ERP Custom Development (Dynamics 365 Platform | ERP | AL Language)"
    },
    {
        projectDate: "June 2020 - July 2020",
        projectName: "DTS Migration - Phase 2 | PT. Bank Central Asia Finance",
        projectDescription: "SSIS Development (Data flow automation, SQL Server | C#)"
    },
    {
        projectDate: "March 2020 - June 2020",
        projectName: "DTS Migration - Phase 1 | PT. Bank Central Asia Finance",
        projectDescription: "SSIS Development (Data flow automation, SQL Server | C#)"
    },
    {
        projectDate: "January 2019 - February 2019",
        projectName: "Shipping Order Report & Invoice Report | PT. Natural Java Spice",
        projectDescription: "Dynamics AX 2012 R3 Change Request (Dynamics AX 2012 R3 | ERP | X++)"
    },
    {
        projectDate: "March 2018 - December 2018",
        projectName: "Dynamics AX 2012 R3 Implementation | PT. Visionet International",
        projectDescription: "Dynamics AX 2012 R3 Development (ERP | X++)"
    },
]

const Timeline : React.FC<{className?: string}> = ({className}) => {
    const [ ref2, inView2 ] = useInView({
        /* Optional options */
        threshold: 0.2,
        triggerOnce: true
    });

    const TimelinePart = TimelineData.map((timeline, index) => {
        return(
            <li key={index}
                className={`items-start transition-all md:mb-10 mb-5 ml-4 pt-5 ${inView2 ? "opacity-100" : "opacity-0"}`}
                style={{transitionDelay:`${(index + 1) * 0.2}s`, transitionDuration:`1s`}}>
                <div className="flex flex-col">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{timeline.projectDate}</time>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{timeline.projectName}</h3>
                <p className="mb-4 text-base font-normal text-gray-500 ">{timeline.projectDescription}</p>
                {/* <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
            </li>
        )
    })

    return (
        <React.Fragment>
            <ol ref={ref2} 
                className={`${className} relative border-l border-gray-200 ${inView2 ? "opacity-100" : "opacity-0"}`}
                style={{transitionDuration:`1s`}}>
                {TimelinePart}
            </ol>
        </React.Fragment>
    )
}

export default Timeline