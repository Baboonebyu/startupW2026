import React, { useState, useEffect } from 'react';
import './scores.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export function Scores() {
    const { user } = useContext(UserContext);
    const isLocked = !user;
    const [percentCorrectArray, setPercentCorrectArray] = useState([]);

    useEffect(() => {
        if (user) {
            setPercentCorrectArray(grabUserMatchStats(user));
        } else {
            setPercentCorrectArray([]);
        }
    }, [user]);

    return (
        <main className="container-fluid text-center">
            <div className="titleBox">
                <h2>High Scores</h2>
            </div>
            <div className="statsBox">
                <div className="center">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide carousel-fade"
                        data-bs-ride={isLocked ? undefined : "carousel"}
                        data-bs-interval={isLocked ? "false" : undefined}
                        style={isLocked ? { pointerEvents: "none" } : {}}
                    >
                        {!isLocked && (
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                        )}
                        <div className="carousel-inner">
                            {!isLocked && (
                                <div className="carousel-item active">
                                    <h3>Personal Bests</h3>
                                    <table className="table table-dark table-striped">
                                        <tr>
                                            <th>Rank</th>
                                            <th>Time</th>
                                            <th>Date</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>1:45</td>
                                            <td>05/28/2024</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>3:45</td>
                                            <td>05/28/2026</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>3:55</td>
                                            <td>05/20/2024</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>3:55</td>
                                            <td>05/20/2024</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>3:55</td>
                                            <td>05/20/2024</td>
                                        </tr>
                                    </table>
                                </div>
                            )}
                            {!isLocked && (
                                <div className="carousel-item">
                                    <h3>Temple Stats</h3>
                                 
                                    <table className="table table-dark table-striped">
                                        <tr>
                                            <th>Best Temples</th>
                                            <th>Worst Temples</th>
                                        </tr>
                                        <tr>
                                            <td>Salt Lake - 100%</td>
                                            <td>Provo  - 13%</td>
                                        </tr>
                                        <tr>
                                            <td>Manti - 90%</td>
                                            <td>City center  - 12%</td>
                                        </tr>
                                        <tr>
                                            <td>Manti - 90%</td>
                                            <td>City center  - 12%</td>
                                        </tr>
                                        <tr>
                                            <td>Manti - 90%</td>
                                            <td>City center  - 12%</td>
                                        </tr>
                                        <tr>
                                            <td>Manti - 90%</td>
                                            <td>City center  - 12%</td>
                                        </tr>
                                    </table>
                                </div>
                            )}
                            <div className={`carousel-item${isLocked ? " active" : ""}`}>
                                <h3>Global Bests</h3>
                                <table className="table table-dark table-striped">
                                    <tr>
                                        <th>Rank</th>
                                        <th>Time</th>
                                        <th>Name</th>
                                        <th>Date</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>1:23</td>
                                        <td>Noah</td>
                                        <td>06/01/2024</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>1:45</td>
                                        <td>Emma</td>
                                        <td>05/28/2024</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>2:10</td>
                                        <td>Bro. Brigham</td>
                                        <td>05/20/2024</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>2:30</td>
                                        <td>Bro. Brigham</td>
                                        <td>02/20/2024</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>2:40</td>
                                        <td>Enos</td>
                                        <td>02/01/2024</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function grabUserMatchStats(user) {
    const allUserStats = JSON.parse(localStorage.getItem('userStats')) || {};
    const userStats = allUserStats[user.username] || [];
    const percentCorrectArray = [];
    for (const stats of userStats) {
        const percentCorrect = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        percentCorrectArray.push({ id: stats.id, percentCorrect });
    }
  
    console.log(percentCorrectArray);
    return percentCorrectArray;
}


const Temples = [
    {id : 1, name: "Bountiful"},
    {id : 2, name: "Brigham City"},
    {id : 3, name: "Layton"},
    {id : 4, name: "Logan"},
    {id : 5, name: "Salt Lake"},
    {id : 6, name: "Ogden"},
    {id : 7, name: "Smithfield"},
    {id : 8, name: "Syracuse"},
    {id : 9, name: "Cedar City"},
    {id : 10, name: "Draper"},
    {id : 11, name: "Jordan River"},
    {id : 12, name: "Deseret Peaks"},
    {id : 13, name: "Manti"},
    {id : 14, name: "Monticello"},
    {id : 15, name: "Ephraim"},
    {id : 16, name: "Payson"},
    {id : 17, name: "Provo City Center"},
    {id : 18, name: "Lindon"},
    {id : 19, name: "Mt. Timpanogos"},
    {id : 20, name: "Oquirrh Mountain"},
    {id : 21, name: "Orem"},
    {id : 22, name: "Red Cliffs"},
    {id : 23, name: "Saratoga Springs"},
    {id : 24, name: "St. George"},
    {id : 25, name: "Vernal"},
    {id : 26, name: "Taylorsville"},
]