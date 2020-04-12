import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Row, Col, Card, Divider, Button } from 'antd';
import HeaderCustom from '../Header';
import './styles.less'

import ImgMainHome from '../../assets/images/MainHome1.JPG'
import ImgCTA from '../../assets/images/cta.webp'
import ImgSol1 from '../../assets/images/Finance.JPG'
import ImgSol2 from '../../assets/images/Calendar.JPG'
import ImgSol3 from '../../assets/images/HomeMaintnenance.JPG'
import ImgSol4 from '../../assets/images/PlanandProtect.JPG'
import ImgSol5 from '../../assets/images/LifeDocs.JPG'
import ImgSol6 from '../../assets/images/FamilyManagement.JPG'
import ImgLife1 from '../../assets/images/Achieve Harmony.png'
import ImgLife2 from '../../assets/images/Suit your Life Goals.png'
import ImgLife3 from '../../assets/images/Take Charge of your Finances.png'
import ImgBlog1 from '../../assets/images/zenfullyzo1.JPG'
import ImgBlog2 from '../../assets/images/zenfullyzo2.jpg'
import ImgBlog3 from '../../assets/images/zenfullyzo3.JPG'


export class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Layout>
          <HeaderCustom menuOnly={true} />
          <Row type="flex" justify="space-between" align="middle" className="hero-row">
            <Col lg={12}>
              <h2>FIND COMPLETE <span>ZEN</span> WITH <span>ZO</span></h2>
              <Divider />
              <p>
                Stay on top of calendars, busy schedules, tasks, finances, home maintenance and beyond  - all from one app. Your own digital personal command center, ZO ORGANIZED™.
              </p>
              <Link to="/z/register">
                <Button type="primary" size="large" shape="round">SIGN UP</Button>
              </Link>
            </Col>
            <Col lg={12}>
              <img src={ImgMainHome} alt="hero" width="100%" />
            </Col>
          </Row>
        </Layout>
        <div className="zo-solutions-row">
          <Layout>
            <Row>
              <h3><span>ZO</span> SOLUTIONS</h3>
              <Divider />
              <p>
                Managing the day-to-day demands of your life can get overwhelming - from juggling busy schedules, coordinating calendars, scheduling appointments, planning, and completing tasks, it’s no wonder your to-do list seems never ending.
              </p>
              <div className="solutions">
                <div className="solution-card">
                  <label>Finance</label>
                  <img alt="solution" src={ImgSol1} />
                </div>
                <div className="solution-card">
                  <label>Money Management</label>
                  <img alt="solution" src={ImgSol2} />
                </div>
                <div className="solution-card">
                  <label>Taxes</label>
                  <img alt="solution" src={ImgSol3} />
                </div>
                <div className="solution-card">
                  <label>Plan & Protect</label>
                  <img alt="solution" src={ImgSol4} />
                </div>
                <div className="solution-card">
                  <label>Lfie Docs</label>
                  <img alt="solution" src={ImgSol5} />
                </div>
                <div className="solution-card">
                  <label>Childcare</label>
                  <img alt="solution" src={ImgSol6} />
                </div>
              </div>
              <p>
                FINANCE -When icon is click this content changes to match icon
              </p>
              <p>
                Although each of these are essential building blocks of organization, it seems like too much work - sadly,most just continue with their “old” ways that don’t necessarily work.
              </p>
            </Row>
          </Layout>
        </div>
        
        <div className="cta-row">
          <img alt="signup" src={ImgCTA} width="100%" />
          <Layout>
            <Link to="/z/register">
              <Button size="large" type="primary">Sign Up for ZO App</Button>
            </Link>
          </Layout>
        </div>
        <Layout>
          <Row>
            <h3>TAKE BACK YOUR LIFE</h3>
            <Divider />
            <Row type="flex" justify="center" align="top">
              <Col md={8}>
                <Card
                  bordered={false}
                  style={{ maxWidth: 320, margin: 'auto' }}
                  cover={<img alt="life" src={ImgLife1} />}
                >
                  <Card.Meta
                    title="Achieve Harmony and Life Balance"
                    description="It can be exhausting even thinking about keeping up with paper & electronic files, countless emails, and various  logins for banking, bills, kids’ schools and sports teams.
                    ZO is here to take the sifting, sorting, & frustration out of staying organized."
                  />
                </Card>
              </Col>
              <Col md={8}>
                <Card
                  bordered={false}
                  style={{ maxWidth: 320, margin: 'auto' }}
                  cover={<img alt="life" src={ImgLife2} />}
                >
                  <Card.Meta
                    title="Suit Your Life's Goals, at Any Stage You May Be"
                    description="Customize ZO by your life’s goals for what stage you're in.
                    You just graduated, now what? Maybe you're planning to move. Or, like many, you may just want to streamline your busy household. Focus in any area of life’s experiences and design your own ZO."
                  />
                </Card>
              </Col>
              <Col md={8}>
                <Card
                  bordered={false}
                  style={{ maxWidth: 320, margin: 'auto' }}
                  cover={<img alt="life" src={ImgLife3} />}
                >
                  <Card.Meta
                    title="Take Charge of Your Finances"
                    description="Let's face it, you’re the household CFO. Pay bills on time, understand where you spend with managing household income & expenses, gain control of your investments, cash flow, & savings for home upgrades, vacations & more. "
                  />
                </Card>
              </Col>
            </Row>

          </Row>
        </Layout>
        <div className="solution-row">
          <Layout>
            <Row type="flex" align="middle">
              <Col md={12}>
                <h4>IF YOU CAN RELATE,YOU NEED A SOLUTION</h4>
                <Divider />
                <p>
                  THIS IS A ROTATOR, WITH IMAGEAND TEXT SIDE BY SIDE WITHTHIN GRAY BORDER.
                </p>
              </Col>
            </Row>
          </Layout>
        </div>
        <Layout>
          <Row>
            <h3>ZENFULLY <span>ZO</span> BLOG</h3>
            <Divider />
            <Row type="flex" justify="center" align="top">
              <Col md={8}>
                <Card
                  hoverable
                  bordered={false}
                  title="Blog Feed"
                  style={{ maxWidth: 350, margin: 'auto' }}
                  cover={<img alt="blog" src={ImgBlog1} />}
                >
                  <Card.Meta
                    description="Not only do resorts usually only have the lay flat rafts, but it’s often that you can’t even claim one. I personally like to sit and float."
                  />
                </Card>
              </Col>
              <Col md={8}>
                <Card
                  hoverable
                  bordered={false}
                  title="ZO Organized Life"
                  style={{ maxWidth: 350, margin: 'auto' }}
                  cover={<img alt="blog" src={ImgBlog2} />}
                >
                  <Card.Meta
                    description="Not only do resorts usually only have the lay flat rafts, but it’s often that you can’t even claim one. I personally like to sit and float."
                  />
                </Card>
              </Col>
              <Col md={8}>
                <Card
                  hoverable
                  bordered={false}
                  title="ZO Organized Home"
                  style={{ maxWidth: 350, margin: 'auto' }}
                  cover={<img alt="blog" src={ImgBlog3} />}
                >
                  <Card.Meta
                    description="Not only do resorts usually only have the lay flat rafts, but it’s often that you can’t even claim one. I personally like to sit and float."
                  />
                </Card>
              </Col>
            </Row>
          </Row>
        </Layout>
      </div>
    )
  }
}

export default Homepage
