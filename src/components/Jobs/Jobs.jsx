import React, { useEffect } from 'react'
import { Desc, DescContianer, Image, ImageContainer, JobsContainer, JobsStyled, LinkJob, Small, SmallContainer, TitleJob, TitleJobContainer, TitleJobs, TitleJobsContainer } from './JobsStyles'
import { jobs } from '../jobsArray/JobsArray'
import Aos from 'aos'

const EachJob=({ url,link, desc,name})=>{
    return(
        <>
            <JobsStyled 
            >
                <ImageContainer>
                    <Image src={url}></Image>
                    <SmallContainer>
                        <Small>
                            <LinkJob target='_blank' href={link}>
                                ¡Take me there!
                            </LinkJob>
                        </Small>
                    </SmallContainer>
                </ImageContainer>

                <DescContianer>
                    <TitleJobContainer>
                        <TitleJob>
                            {name}
                        </TitleJob>
                    </TitleJobContainer>
                    <Desc>
                        {desc}
                    </Desc>
                </DescContianer>
            </JobsStyled>
        </>
    )
}

export const Jobs = () => {
    console.log(jobs)
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <JobsContainer
    id='jobs'
    // data-aos="fade-down"
    // data-aos-easing="linear"
    // data-aos-duration="400"
    >
        <TitleJobsContainer>
            <TitleJobs>
                Proyecyos realizados por mi
            </TitleJobs>
        </TitleJobsContainer>
        {
            jobs.map((job=>{
                return(
                    <EachJob key={job.id} {...job}
                    ></EachJob>
                )
            }))
        }
    </JobsContainer>
  )
}
