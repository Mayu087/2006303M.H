console.log('chart-test.jsを読み込みました')

const labels = [
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
  ];

const data = {
    labels: labels,
    datasets: [
    {
      label: '過去10年間のアメリカの名目GDP推移(兆USD)',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [15.60,16.25,16.84,17.55,18.21,18.67,19.48,20.53,21.37,20.89,22.99],
    },
    {
        label: '過去10年間の中国の名目GDP推移(兆USD)',
      backgroundColor: 'rgb(255,159,0)',
      borderColor: 'rgb(255,159,0)',
      data: [7.50,8.54,9.62,10.52,11.11,11.27,12.26,13.84,14.34,14.86,17.45],
    },
    {
        label: '過去10年間の日本の名目GDP推移(兆USD)',
        backgroundColor: 'rgb(161,134,255)',
        borderColor: 'rgb(161,134,255)',
        data: [6.23,6.27,5.21,4.90,5.00,4.93,5.03,4.93,5.04,5.13,5.04,4.94]
    }
]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('chart1'),
    config
  );

  