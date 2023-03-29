import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IAgent } from 'src/app/model/Agent';
import { StatisticsService } from 'src/app/services/statistics.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  agentSignedPoliciesChart: any = [];
  chart1_data: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  agents : IAgent[] = []
  year : number = -1
  agentId : number = -1

  accidentsChart: any = []
  chart2_data : any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  accidentYear : number = -1

  numberOfEachAccidentStatusChart : any = []
  chart3_data : any = [0, 0, 0]

  constructor(private statService: StatisticsService, private userService: UserService){
    Chart.register(...registerables);
  }


  ngOnInit(): void {

    this.userService.getAllAgents().subscribe({
      next : (res) => {
        console.log(res)
        this.agents = res
      }, error: (err) =>{
        console.log(err.error)
      }
    })

    this.createSignedPoliciesChart()
    this.createAccidentsChart()

    this.statService.GetNumberOfEachAccidentStatus().subscribe({
      next : (res) => {
        this.chart3_data = res
        this.createAccidentStatusChart()
      }, error : (err) => {

      }
    })
  }


  createSignedPoliciesChart(){
    
    this.agentSignedPoliciesChart = new Chart('chart1', {
      type: 'line',
      data: {
        labels: [
          'Januar',
          'Februar',
          'Mart',
          'April',
          'Maj',
          'Jun',
          'Jul',
          'Avgust',
          'Septembar',
          'Oktobar',
          'Novembar',
          'Decembar',
        ],
        datasets: [
          {
            label: 'Broj prodatih polisa',
            data: this.chart1_data,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            color: 'gray',
            display: true,
            font: {
              size: 20,
            },
            text: 'Broj prodatih polisa',
            padding: {
              top: 10,
            },
          },
        },
      },
    });
  }

  createAccidentsChart(){
    
    this.accidentsChart = new Chart('chart2', {
      type: 'line',
      data: {
        labels: [
          'Januar',
          'Februar',
          'Mart',
          'April',
          'Maj',
          'Jun',
          'Jul',
          'Avgust',
          'Septembar',
          'Oktobar',
          'Novembar',
          'Decembar',
        ],
        datasets: [
          {
            label: 'Broj prijavljenih nesreća',
            data: this.chart2_data,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            color: 'gray',
            display: true,
            font: {
              size: 20,
            },
            text: 'Broj prijavljenih nesreća',
            padding: {
              top: 10,
            },
          },
        },
      },
    });
  }


 
  createAccidentStatusChart() {
    this.numberOfEachAccidentStatusChart = new Chart(
      "chart3",
      {
        type: 'bar',
        data: {
          labels: ['VALIDNE', 'NEVALIDNE', "ČEKAJU NA VALIDACIJU"],
          datasets: [
            {
              label: 'Ukupan broj nesreća prema statusu',
              data: this.chart3_data,
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              color: 'gray',
              display: true,
              text: 'Ukupan broj nesreća prema statusu',
              font: {
                size: 20,
              },
              padding: {
                top: 10,
              },
            },
          },
        },
      }
    );
  }


  saveAgent(event: any){
    
    this.agentId = event.value
    if (this.year == -1) return

    this.statService.GetNumberOfAgentSignedPoliciesPerMonth(this.agentId, this.year).subscribe({
      next : (res) => {
        this.chart1_data = res
        this.agentSignedPoliciesChart.destroy()
        this.createSignedPoliciesChart()
      }, error : (err) => {

      }
    })

  }
  
  saveYear(event: any){
    this.year = event.value
    if (this.agentId == -1) return
    this.statService.GetNumberOfAgentSignedPoliciesPerMonth(this.agentId, this.year).subscribe({
      next : (res) => {
        this.chart1_data = res
        this.agentSignedPoliciesChart.destroy()
        this.createSignedPoliciesChart()
      }, error : (err) => {

      }
    })
  }

  saveAccidentYear(event: any){
    this.accidentYear = event.value
    this.statService.GetNumberOfAccidentsPerMonth(this.accidentYear).subscribe({
      next : (res) => {
        this.chart2_data = res
        this.accidentsChart.destroy()
        this.createAccidentsChart()
      }, error : (err) => {

      }
    })
  }
}
