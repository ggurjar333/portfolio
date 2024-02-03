// src/data.js
export const projects = [
    {
        title: "Azure",
        subtitle: "Data Engineer",
        description: "ETL of sports data streaming platforms",
        image:"https://loveoffootball.io/assets/logo.svg",
        link: "https://loveoffootball.io/",
        id: "nfl-sports-data-pipeline",
        blog: {
            title:"Love of Sports LLC",
            type:"Sport Analytics",
            company: "Love of Sports LLC is a passionate sports community dedicated to bringing sports enthusiasts together. " +
                "Our mission is to promote love of sports and provide a platform for fans to connect and share their passion. " +
                "We are committed to providing high-quality content, organizing events, and fostering a sense of community among sports fans from all over the world.",
            image: "https://www.logo.wine/a/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.svg",
            challenge: {
                intro: "This project had a specific limitation of 4000 API calls/month, which required careful planning and strategic data handling.",
                points: {
                    point1: {
                        title: "",
                        description:""
                    },
                    point2: {
                        title: "",
                        description:""
                    },
                    point3: {
                        title: "",
                        description:""
                    },
                },
            },
            solution: {
                intro: "",
                points: {
                    point1: {
                        title: "",
                        description:""
                    },
                    point2: {
                        title: "",
                        description:""
                    },
                    point3: {
                        title: "",
                        description:""
                    },
                    point4: {
                        title: "",
                        description:""
                    },
                    point5: {
                        title: "",
                        description:""
                    }
                },
            },
            impact: "I ended up deploying a python package based ETL as part of my enthusiasm for the project. It eventually added immense value to the project's overall usability.",
            details: {
                intro: "",
                points: {
                    point1: {
                        title: "",
                        description:""
                    },
                    point2: {
                        title: "",
                        description:""
                    },
                    point3: {
                        title: "",
                        description:""
                    },
                },
            },
        },
    },
    {
        title: "AWS and GCP",
        subtitle: "Data Engineer",
        description: "ETL of cannabis market data, contact information, industry news, building custom reports, and financial insights",
        image:"https://cannaspyglass.com/hubfs/Asset%202.svg",
        link: "https://cannaspyglass.com/",
        id: "cannaspyglass-data-pipeline",
        blog: {
            type:"Client story",
            title: "CannaSpyglass",
            company: "The most credible source for cannabis market data & analytics.",
            image: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg",
            challenge: {
                intro: "The project presented multifaceted challenges, each layer of the data pipeline requiring careful consideration. Navigating through Raw Buckets, Processed Buckets, Enrich Buckets, Database Ingestion, and API development demanded a keen understanding of data dynamics, scalability concerns, and the need for seamless integration. The challenge lay in ensuring that the pipelines not only functioned individually but harmonized to create a cohesive and efficient data delivery system.",
                points: {
                    point1: {
                        title: "Data Collection from US Government websites and ecommerce websites focused on Cannabis products",
                        description:"While collecting data from US Government and private ecommerce sites I was facing CAPTCHA issues and IP blockers for recurring data retrievals on my local development environment."
                    },
                    point2: {
                        title: "Unstable extract data operation pipelines on AWS EC2",
                        description:"I had collected PDFs, JSON files from websites at Raw Data Bucket on AWS S3. " +
                            "Most of the time the PDF data layout remained the same but anytime these PDFs changed over time by the US Medical Marijuana Authority. " +
                            "Eventually, due to this tabular data changes within PDFs the data culling process failed. "
                    },
                    point3: {
                        title: "Data Transformation data failures",
                        description:" Due to unprecedented changes at the source location at the US authority. Data transformation failure was natural."
                    },
                },
            },
            solution: {
                intro: "Efficient AWS Glue data pipelines using S3 Data Layers and BrightData Proxy servers",
                points: {
                    point1: {
                        title: "Raw Buckets",
                        description:"I was using camelot library, a very well tech rounded library to extract structured data based PDFs. I felt very confident due to its data processing quality even my senior team always amazed by the processing outputs. After some time, The US authority switched to a framework based APIs to deliver the same PDF data over Web Applications access. " +
                            "I informed my team about it and given me a green flag to build the pipelines for this change as well. I used AWS Wrangler, Camelot, Pandas for this pipeline." +
                            "This challenge at the raw data stage was handling a diverse influx of unprocessed information. The solution involved designing a scalable architecture capable of accommodating various data types. Implementation of robust validation processes ensured the integrity of the raw data, setting the stage for subsequent processing."
                    },
                    point2: {
                        title: "Processed Buckets",
                        description:"To address the challenge of transforming raw data into a structured format, optimization techniques were introduced. These streamlined processes significantly reduced processing times, enhancing the efficiency of the pipelines. The solution here lay in creating a modular processing framework that could adapt to evolving data requirements."
                    },
                    point3: {
                        title: "Enrich Buckets",
                        description:"Enriching data for relevance posed a unique challenge. The solution involved integrating tailored enrichment processes into the pipeline. This not only improved the quality of the data but also ensured its applicability for analytical purposes, setting the stage for impactful insights."
                    },
                    point4: {
                        title: "Database Ingestion",
                        description: "Data ingestion on AWS RDS databases for development, QA and Production environment. Seamless integration with databases demanded a meticulous approach. The solution included designing a reliable database ingestion layer that facilitated the smooth flow of data. This ensured data integrity and provided a foundation for effective storage and retrieval."
                    },
                    point5: {
                        title: "API Development",
                        description: "Developed and exposed AWS lambda handlers APIs on top of AWS RDS based SQL views. Real-time access to enriched data presented a final challenge. The solution was found in the development of APIs, empowering users with dynamic and immediate access. This not only enhanced user experience but also expanded the project's scope for integration with external applications."
                    }
                },
            },
            impact: "The development and optimization of data pipelines has become a cornerstone of CannaSpyGlass's success. As the leading provider of cannabis market data, the platform now leverages the accelerated data delivery, improved reliability, and enhanced accuracy at every stage. By overcoming challenges with innovative solutions, these pipelines position CannaSpyGlass as a beacon of excellence in the data engineering landscape, amplifying its ability to deliver B2B contact information, analytics, AI-powered industry news, pre-built and custom reports, an interactive map, and financial insights for informed business decisions. I've designed and built over 300+ Python/SQL data pipelines, optimizing data delivery for various architectural layers, including Raw Buckets, Processed Buckets, Enrich Buckets, Database Ingestion, and API development. My work has significantly improved data relevancy, making it an invaluable asset to the project's success.",
            details: {
                intro: "",
                points: {
                    point1: {
                        title: "Accelerated Data Delivery",
                        description:"All data buckets were on AWS S3, exposed data APIs on AWS Lambda. Quick and reliable access to the business team, The optimized data pipelines have significantly accelerated the delivered of cannabis market data."
                    },
                    point2: {
                        title: "Enhanced Reliability",
                        description:"The customers of CannaSpyGlass believes the market data are true and authentic. Users can trust in the consistency and accuracy of the provided B2B contact information, analytics, and other crucial data elements, establishing the platform as a reliable resource in the cannabis industry."
                    },
                    point3: {
                        title: "Improved Accuracy at Every Stage",
                        description:"The meticulous design and implementation of over 300 Python/SQL data pipelines have led to a marked improvement in data accuracy at every stage. From Raw Buckets to API development, the project now boasts a higher level of precision, ensuring the delivery of trustworthy and impactful insights for businesses navigating the cannabis market landscape."
                    },
                },
            },
        },
    },
    {
        title: "AWS",
        subtitle: "Associate Data Scientist",
        description: "AWS ETL to support statistical models that helped assisting more than 2M+ COVID-19 patients",
        image:"https://www.logo.wine/a/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.svg",
        link: "https://squared.ai/",
        id: "covid19-risk-tools-data-pipeline",
        blog: {
            type:"Client story",
            title: "AI Squared Inc.",
            company: "",
            image: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg",
            challenge: {
                intro: "",
                points: {
                    point1: {
                        title: "",
                        description:""
                    },
                    point2: {
                        title: "",
                        description:""
                    },
                    point3: {
                        title: "",
                        description:""
                    },
                },
            },
            solution: {
                intro: "",
                points: {
                    point1: {
                        title: "",
                        description:""
                    },
                    point2: {
                        title: "",
                        description:""
                    },
                    point3: {
                        title: "",
                        description:""
                    },
                    point4: {
                        title: "",
                        description:""
                    },
                    point5: {
                        title: "",
                        description:""
                    }
                },
            },
            impact: "",
            details: {
                intro: "",
                points: {
                    point1: {
                        title: "",
                        description:""
                    },
                    point2: {
                        title: "",
                        description:""
                    },
                    point3: {
                        title: "",
                        description:""
                    },
                },
            },
        },
    },
    {
        title: "On-Premise",
        subtitle: "Assistant PM",
        description: "data staging, communicating US senior managers/lawyers to understand business processes, managing 5 TB+ data processing workflows with team, and data dashboard reviewing for US litigation data compliance",
        image:"",
        link: "https://www.casepoint.com/",
        id: "casepoint-project-management-ediscovery-data",
        blog: {
            type:"",
            title: "",
            company: "",
            image: "https://www.casepoint.com/wp-content/uploads/2023/03/Casepoint-Legal-Hold-Press-Release.svg",
            challenge: {
                intro: "",
                points: {
                    point1: {
                        title: "",
                        description:""
                    },
                    point2: {
                        title: "",
                        description:""
                    },
                    point3: {
                        title: "",
                        description:""
                    },
                },
            },
            solution: {
                intro: "",
                points: {
                    point1: {
                        title: "",
                        description:""
                    },
                    point2: {
                        title: "",
                        description:""
                    },
                    point3: {
                        title: "",
                        description:""
                    },
                    point4: {
                        title: "",
                        description:""
                    },
                    point5: {
                        title: "",
                        description:""
                    }
                },
            },
            impact: "",
            details: {
                intro: "",
                points: {
                    point1: {
                        title: "",
                        description:""
                    },
                    point2: {
                        title: "",
                        description:""
                    },
                    point3: {
                        title: "",
                        description:""
                    },
                },
            },
        },
    },
    // {
    //     title: "",
    //     subtitle: "",
    //     description: "",
    //     image:"",
    //     link: "",
    //     id: "",
    //     blog: {
    //         type:"",
    //         title: "",
    //         company: "",
    //         image: "",
    //         challenge: {
    //             intro: "",
    //             points: {
    //                 point1: {
    //                     title: "",
    //                     description:""
    //                 },
    //                 point2: {
    //                     title: "",
    //                     description:""
    //                 },
    //                 point3: {
    //                     title: "",
    //                     description:""
    //                 },
    //             },
    //         },
    //         solution: {
    //             intro: "",
    //             points: {
    //                 point1: {
    //                     title: "",
    //                     description:""
    //                 },
    //                 point2: {
    //                     title: "",
    //                     description:""
    //                 },
    //                 point3: {
    //                     title: "",
    //                     description:""
    //                 },
    //                 point4: {
    //                     title: "",
    //                     description:""
    //                 },
    //                 point5: {
    //                     title: "",
    //                     description:""
    //                 }
    //             },
    //         },
    //         impact: "",
    //         details: {
    //             intro: "",
    //             points: {
    //                 point1: {
    //                     title: "",
    //                     description:""
    //                 },
    //                 point2: {
    //                     title: "",
    //                     description:""
    //                 },
    //                 point3: {
    //                     title: "",
    //                     description:""
    //                 },
    //             },
    //         },
    //     },
    // }
];

export const skills = [
    {
        title: "MBA in Data Sciences and Data Analytics",
    },
    {
        title: "Bachelors in Computer Applications",
    },
    {
        title: "Application Development"
    },
    {
        title: "Design Patterns"
    },
    {
        title: "Continuous Integration/Development"
    },
    {
        title: "Data Engineering"
    }
];

export const testimonials = [
    {
        name: "John Bonnett, CEO",
        image: "https://avatars.githubusercontent.com/u/141473057?v=4",
        quote: "Working with Gaurav has been an absolute pleasure. From the moment we began our project, it was clear that Gaurav possesses a remarkable talent for comprehending complex requirements and swiftly suggesting enhancements that greatly improved our project's efficiency. Gaurav's expertise in Python scripting, data manipulation, and database management is truly impressive. He not only delivered on the project's objectives but also went above and beyond our expectations. What truly stood out was his initiative to develop a complete Python package to streamline processes—a feature that wasn't initially part of our requirements but added immense value to the project's overall usability. https://pypi.org/project/sportradar-unofficial/ Having worked in the IT field for over seven years, I've collaborated with various professionals, and I can confidently say that Gaurav ranks among my favorite freelancers. His professionalism, expertise, and commitment to delivering exceptional results make him a valuable asset to any project. I look forward to the opportunity to work with Gaurav again in the future.",
        company: "Love of Sports LLC"
    },
    {
        name: "Adam Hutchinson, Go To Market",
        image: "https://cannaspyglass.com/hs-fs/hubfs/adam2.jpg?width=800&height=800&name=adam2.jpg",
        quote: "Gaurav is an outstanding innovator - very talented technologist and communicator.",
        company: "CannaSpyGlass"
    },
    {
        name: "Stanly Thomas, Co-Founder",
        image: "https://www.stanratech.com/wp-content/uploads/2019/08/Stan-150x150.jpg",
        quote: "Gaurav is a very diligent, hardworking and proactive person. He is a very reliable technical guy with expertise in data sciences area. Keen learner and comes up with good ideas",
        company: "Stanra Tech Solutions"
    },
    {
        name: "Benjamin Harvey, PhD, CEO",
        image: "https://emse.engineering.gwu.edu/sites/g/files/zaxdzs5021/files/image/Headshot_Wale_20211206_4final.jpg",
        quote: "I have worked with Gaurav for close to a year and he is a very well rounded, skilled, and innovative data scientist. He has helped me in the development of statistical methods, backend server infrastructure, and data science tasks. Gaurav is not only a great developer but also a great communicator. He has always been very prompt, responsive, and completes tasks on time. He goes above and beyond to ensure that the customer requirements and needs are met. He is such a valuable colleague and I recommend him to anyone seeking expert level data science services or working to develop statistical methods for data science models. He has been a pleasure to work with!",
        company: "AI Squared Inc."
    },
    {
        name: "Ivette Basterrechea, Director, Client Services",
        image: "",
        quote: "Gaurav is a thoughtful person with a very creative mind. He is intellectually curious and looks for efficient solutions to any problems. I enjoyed my time working with him and appreciate the collegial relationship we developed. I have great faith that he will achieve success in any career path he pursues.",
        company: "Casepoint LLC"
    },
    {
        name: "John Bassey, Data Analyst",
        image: "",
        quote: "I had a pleasure of working and collaborating with Gaurav on a cross functional data engineering project. His expertise and excellent project management skills were top notch. As a team member he always brought a positive energy and a can-do attitude. He was very quick to lend a helping hand to support anyone when needed",
        company: "Time Doctor"
    },
];