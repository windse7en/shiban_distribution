import people from './people';
import translateStateName from './ChinaStateName';

const getPeopleByCity = (entry, people) => {
  const city = entry.city;
  let peopleCount = people.reduce(function(total, person){return person.city===city ? total+1 : total}, 0);
  let result = `${peopleCount} 人<br/>`;
  // update people count
  const cityDiv = document.getElementById('cityData');
  cityDiv.innerHTML += `${entry.title}(${entry.country}): ${result}`;

  people.forEach( (person) => {
    if (person.city === city) {
      result  += (person.name + ': ' + person.description + "<br/>");
      const peopleDiv = document.getElementById('peopleData');
      peopleDiv.innerHTML += `<p>${person.name}(${entry.title}, ${entry.country})</p>`;
    }
  });
  return result;
}

var china_points =  [ {
      "longitude": 116.4074,
      "latitude": 39.9042,
      "city": "Beijing",
      "title": "北京",
      "country": "中国"
    }, {
      "longitude": 121.4737,
      "latitude": 31.2304,
      "city": "Shanghai",
      "title": "上海",
      "country": "中国"
    }, {
      "longitude": 117.2010,
      "latitude": 39.0842,
      "city": "Tianjin",
      "title": "天津",
      "country": "中国"
    }, {
      "longitude": 113.2644,
      "latitude": 23.1291,
      "city": "Guangzhou",
      "title": "广州",
      "country": "中国"
    }, {
      "longitude": 126.5350,
      "latitude": 45.8038,
      "city": "Harbin",
      "title": "哈尔滨",
      "country": "中国"
    }, {
      "longitude": 131.1477,
      "latitude": 44.3998,
      "city": "Suifenhe",
      "title": "绥芬河",
      "country": "中国"
    }, {
      "longitude": 114.0579,
      "latitude": 22.5431,
      "city": "Shenzhen",
      "title": "深圳",
      "country": "中国"
    }, {
      "longitude": 125.3235,
      "latitude": 43.8171,
      "city": "Changchun",
      "title": "长春",
      "country": "中国"
    }, {
      "longitude": 123.4315,
      "latitude": 41.8057,
      "city": "Shenyang",
      "title": "沈阳",
      "country": "中国"
    } ];

var usa_points = [{
      "longitude": -73.5619,
      "latitude": 40.3951,
      "city": "New York",
      "title": "纽约",
      "country": "美国"
    }, {
      "longitude": -96.7970,
      "latitude": 32.7767,
      "city": "Dallas",
      "title": "达拉斯",
      "country": "美国"
    }, {
      "longitude": -94.5786,
      "latitude": 39.0997,
      "city": "Kansas City",
      "title": "堪萨斯城",
      "country": "美国"
    }, {
      "longitude": -121.8863,
      "latitude": 37.3382,
      "city": "San Jose",
      "title": "圣荷西",
      "country": "美国"
    }, {
      "longitude": -117.9001,
      "latitude": 33.9167,
      "city": "Brea",
      "title": "布莱尔",
      "country": "美国"
    }];

var canada_points = [{
  "longitude": -123.1207,
  "latitude": 49.2827,
  "city": "Vancouver",
  "title": "温哥华",
  "country": "加拿大"
}];

var australia_points = [{
      "longitude": 151.2093,
      "latitude": -33.8688,
      "city": "Sydney",
      "title": "悉尼",
      "country": "澳大利亚"
    }, {
      "longitude": 144.9631,
      "latitude": -37.8136,
      "city": "Sydney",
      "title": "墨尔本",
      "country": "澳大利亚"
    }];

var all_points = china_points.concat(usa_points, australia_points, canada_points);

var chinaLowData = AmCharts.maps.chinaLow;
chinaLowData.svg.g.path.forEach( (entry) => {
  entry.title = translateStateName[entry.title];
});

all_points.forEach( (entry) => {
  let peopleCount = people.reduce(function(total, person){return person.city === entry.city ? total+1 : total}, 0);
  if (peopleCount === 0) { return }
  entry.alpha       = 0.5;
  entry.color       = "#CC0000";
  entry.description = getPeopleByCity(entry, people);
  entry.labelShiftY = 2;
  entry.scale       = 1;
  entry.type        = "circle";
}, this);

var australiaDataProvider = {
  mapVar: AmCharts.maps.australiaLow,
  getAreasFromMap: true,
  images: australia_points
};

var canadaDataProvider = {
  mapVar: AmCharts.maps.canadaLow,
  getAreasFromMap: true,
  images: canada_points
};

var chinaDataProvider = {
  mapVar: chinaLowData,
  getAreasFromMap: true,
  images: china_points
};

var usaDataProvider = {
  mapVar: AmCharts.maps.usa2Low,
  getAreasFromMap: true,
  images: usa_points
};

var australia = {
  id: "AU",
  color: "#4444ff",
  linkToObject: australiaDataProvider
};

var canada = {
  id: "CA",
  color: "#4444ff",
  linkToObject: canadaDataProvider
};

var china = {
  id: "CN",
  color: "#4444ff",
  linkToObject: chinaDataProvider
};

var usa = {
  id: "US",
  color: "#4444ff",
  linkToObject: usaDataProvider
};

var worldDataProvider = {
    "map": "worldLow",
    "areas": [
      australia,
      canada,
      china,
      usa
    ],
    images: all_points,
  };

var map = AmCharts.makeChart( "mapdiv", {
  "type": "map",
  "dataProvider": worldDataProvider,
  "language": "zh",
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#0CCC00"
  },
  "smallMap": {}
} );

function handleGoHome() {
    map.dataProvider = worldDataProvider;
    map.validateNow();
}

map.addListener( "homeButtonClicked", handleGoHome );
