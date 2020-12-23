import React, { Component } from 'react'
import Menu from '../components/Menu'
import { connect } from 'react-redux';
import '../css/killboard.css'
import { getMatches } from '../actions/killboard-actions'
import { bindActionCreators } from 'redux';
import moment from 'moment'
import _ from 'lodash'
import sword from '../images/sword.png'
import shield from '../images/shield.png'
import heart from '../images/heart.png'
import arrow from '../images/arrow.png'
import family from '../images/family.png'
import crown from '../images/crown.png'

class Killboard extends Component {
    componentDidMount() {
        this.props.getMatches()
    }

    render() {
        console.log(this.props.killboard)

        return (
            <div className="page-container">
                <Menu />
                <a onClick={() => console.log(this.props.killboard)}>aaa</a>     

                <div className="killboard-container">
                    {this.props.killboard.battles.map((battle, index) => (
                        <div className="card-killboard-container" key={index}>
                            <div className="card-killboard-time-container">
                                <a className="card-killboard-time-date">{moment(battle.startTime).format('DD/MM/YYYY')}</a>
                                <a className="card-killboard-time-hour">{moment(battle.startTime).format('hh:mm')} UTC</a>
                            </div>
                            
                            <div className="card-killboard-resume-alliance-kills-container">
                                {/* <a className="card-killboard-resume-alliance-kills-title">{battle.alliances.length > 3 ? 'TOP 3 KILLS ALLY' : 'TOP KILLS ALLY'}</a> */}
                                

                                {_.slice(battle.alliances.sort((a , b) => b.kills - a.kills), 0, 3).map((alliance, index) => (
                                    <div className={`card-killboard-resume-alliance-kills${index === 0 ? '-top1' : ''}`}>
                                        {index === 0 && ( 
                                            <div className="crown-container">
                                                <img src={crown} className="crown-icon" /> 
                                                <a>#1</a>
                                            </div>
                                        )}
                                        <div className="card-killboard-resume-alliance-kills-info"> 
                                            <div className="card-killboard-resume-alliance-kd-name">
                                                <a>[{alliance.name}]</a> 
                                            </div>
                                        </div>
                                      
                                        <div className="card-killboard-resume-alliance-kills-inRow">
                                            <a className="inRow-subtitle">KILLS</a>
                                            <a>{alliance.kills}</a>
                                        </div> 
                                        <div className="card-killboard-resume-alliance-kills-inRow">
                                            <a className="inRow-subtitle">DEATHS</a>
                                            <a>{alliance.deaths}</a>
                                        </div> 
                                        <div className="card-killboard-resume-alliance-kills-inRow">
                                            <a className="inRow-subtitle">KILLFAME</a>
                                            <a>{alliance.killFame.toLocaleString()}</a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}               
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    killboard: store.guildKillboardReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMatches }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Killboard)