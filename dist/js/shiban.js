/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _people = __webpack_require__(6);

	var _people2 = _interopRequireDefault(_people);

	var _ChinaStateName = __webpack_require__(7);

	var _ChinaStateName2 = _interopRequireDefault(_ChinaStateName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getPeopleByCity = function getPeopleByCity(city, people) {
	  var peopleCount = people.reduce(function (total, person) {
	    return person.city === city ? total + 1 : total;
	  }, 0);
	  var result = peopleCount + ' 人<br/>';
	  people.forEach(function (person) {
	    if (person.city === city) {
	      result += person.name + ': ' + person.description + "<br/>";
	    }
	  });
	  return result;
	};

	var china_points = [{
	  "longitude": 116.4074,
	  "latitude": 39.9042,
	  "city": "Beijing",
	  "title": "北京"
	}, {
	  "longitude": 121.4737,
	  "latitude": 31.2304,
	  "city": "Shanghai",
	  "title": "上海"
	}, {
	  "longitude": 117.2010,
	  "latitude": 39.0842,
	  "city": "Tianjin",
	  "title": "天津"
	}, {
	  "longitude": 113.2644,
	  "latitude": 23.1291,
	  "city": "Guangzhou",
	  "title": "广州"
	}, {
	  "longitude": 126.5350,
	  "latitude": 45.8038,
	  "city": "Harbin",
	  "title": "哈尔滨"
	}, {
	  "longitude": 131.1477,
	  "latitude": 44.3998,
	  "city": "Suifenhe",
	  "title": "绥芬河"
	}, {
	  "longitude": 114.0579,
	  "latitude": 22.5431,
	  "city": "Shenzhen",
	  "title": "深圳"
	}, {
	  "longitude": 125.3235,
	  "latitude": 43.8171,
	  "city": "Changchun",
	  "title": "长春"
	}, {
	  "longitude": 123.4315,
	  "latitude": 41.8057,
	  "city": "Shenyang",
	  "title": "沈阳"
	}];

	var usa_points = [{
	  "longitude": -73.5619,
	  "latitude": 40.3951,
	  "city": "New York",
	  "title": "纽约"
	}, {
	  "longitude": -96.7970,
	  "latitude": 32.7767,
	  "city": "Dallas",
	  "title": "达拉斯"
	}, {
	  "longitude": -94.5786,
	  "latitude": 39.0997,
	  "city": "Kansas City",
	  "title": "堪萨斯城"
	}, {
	  "longitude": -121.8863,
	  "latitude": 37.3382,
	  "city": "San Jose",
	  "title": "圣荷西"
	}];

	var canada_points = [{
	  "longitude": -123.1207,
	  "latitude": 49.2827,
	  "city": "Vancouver",
	  "title": "温哥华"
	}];

	var australia_points = [{
	  "longitude": 151.2093,
	  "latitude": -33.8688,
	  "city": "Sydney",
	  "title": "悉尼"
	}, {
	  "longitude": 144.9631,
	  "latitude": -37.8136,
	  "city": "Sydney",
	  "title": "墨尔本"
	}];

	var all_points = china_points.concat(usa_points, australia_points, canada_points);

	var chinaLowData = AmCharts.maps.chinaLow;
	chinaLowData.svg.g.path.forEach(function (entry) {
	  entry.title = _ChinaStateName2.default[entry.title];
	});

	all_points.forEach(function (entry) {
	  var peopleCount = _people2.default.reduce(function (total, person) {
	    return person.city === entry.city ? total + 1 : total;
	  }, 0);
	  if (peopleCount === 0) {
	    return;
	  }
	  entry.alpha = 0.5;
	  entry.color = "#CC0000";
	  entry.description = getPeopleByCity(entry.city, _people2.default);
	  entry.labelShiftY = 2;
	  entry.scale = 1;
	  entry.type = "circle";
	}, undefined);

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
	  "areas": [australia, canada, china, usa],
	  images: all_points
	};

	var map = AmCharts.makeChart("mapdiv", {
	  "type": "map",
	  "dataProvider": worldDataProvider,
	  "language": "zh",
	  "areasSettings": {
	    "autoZoom": true,
	    "selectedColor": "#0CCC00"
	  },
	  "smallMap": {}
	});

	function handleGoHome() {
	  map.dataProvider = worldDataProvider;
	  map.validateNow();
	}

	map.addListener("homeButtonClicked", handleGoHome);

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PeopleData = [{
	  "city": "Kansas City",
	  "name": "张韬",
	  "description": "IT"
	}, {
	  "city": "Guangzhou",
	  "name": "李飞",
	  "description": "金融 大数据"
	}, {
	  "city": "Guangzhou",
	  "name": "白一",
	  "description": "IT"
	}, {
	  "city": "Vancouver",
	  "name": "王晓萌",
	  "description": "精算"
	}, {
	  "city": "Melbourne",
	  "name": "王佳馨",
	  "description": "会计"
	}, {
	  "city": "Harbin",
	  "name": "李铭骅",
	  "description": "医生"
	}, {
	  "city": "Suifenhe",
	  "name": "刘思敬",
	  "description": "消防"
	}, {
	  "city": "Beijing",
	  "name": "栾雪琼",
	  "description": "市场营销"
	}, {
	  "city": "Dallas",
	  "name": "曹北溟",
	  "description": "博士"
	}, {
	  "city": "Sydney",
	  "name": "魏来",
	  "description": "金融"
	}];

	exports.default = PeopleData;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var translateStateName = {
	  "Anhui": "安徽",
	  "Fujian": "福建",
	  "Gansu": "甘肃",
	  "Guangxi Zhuang": "广西",
	  "Beijing": "北京",
	  "Chongqing": "重庆",
	  "Guangdong": "广东",
	  "Guizhou": "贵州",
	  "Hainan": "海南",
	  "Hebei": "河北",
	  "Henan": "河南",
	  "Hong Kong": "香港",
	  "Heilongjiang": "黑龙江",
	  "Hunan": "湖南",
	  "Hubei": "湖北",
	  "Jilin": "吉林",
	  "Jiangsu": "江苏",
	  "Jiangxi": "江西",
	  "Liaoning": "辽宁",
	  "Macau": "澳门",
	  "Nei Mongol": "内蒙古",
	  "Ningxia Hui": "宁夏",
	  "Quinghai": "青海",
	  "Shaanxi": "陕西",
	  "Sichuan": "四川",
	  "Shandong": "山东",
	  "Shanghai": "上海",
	  "Shanxi": "山西",
	  "Tianjin": "天津",
	  "Taiwan": "台湾",
	  "Xinjiang Uygur": "新疆",
	  "Xizang (Tibet)": "西藏",
	  "Yunnan": "云南",
	  "Zhejiang": "浙江"
	};

	exports.default = translateStateName;

/***/ }
/******/ ]);