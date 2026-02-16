import React from 'react';
import './scores.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
export function Scores() {
  const { user } = useContext(UserContext);
  return (
    <main className="container-fluid  text-center">
      <div class ="titleBox">
    <h2>High Scores</h2>
    </div>
    


    <div className="statsBox">
        <div className ="center">
        

    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
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
    <div class="carousel-item">
     
           <h3>Temple Stats</h3>
    <table  class="table table-dark table-striped">
        
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
    <div class="carousel-item">
             <h3>Global Bests</h3>
<table  class="table table-dark table-striped">
        
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