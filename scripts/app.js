var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

  $scope.activeExhibit = 'e001';
  $scope.activeActivity = 'e001a001';
  $scope.activeSliderImage = 'image001.jpg';
  $scope.baseSliderPath = '/images/Gallery';

  $scope.isActive = function (key) {
    if (key === $scope.activeExhibit) {
      return 'active'
    }
    return '';
  };

  $scope.getActivityList = function (key) {
    $scope.temp = 0;
    $scope.activeActivityData = {};
    while ($scope.temp < $scope.exhibits.length) {
      if ($scope.exhibits[$scope.temp].key === key) {
        $scope.activeActivityData = $scope.exhibits[$scope.temp];
        $scope.temp = $scope.exhibits.length;
      }
      $scope.temp++;
    }
    return $scope.activeActivityData;
  };

  $scope.getSliderImage = function (image) {
    return {
      "background-image": `url(${baseSliderPath}${image.directoryKey}/${image.imageFile})`
    }
  };

  $scope.getActiveSliderImageUrl = function () {
    return $scope.baseSliderPath + $scope.exhibitData[$scope.activeActivity].images[0].directoryKey + '/' + [$scope.activeSliderImage];
  };

  $scope.exhibits = [
    {
      key: 'e001',
      name: 'Role Play',
      activities: [
        {
          key: 'e001a001',
          name: 'Police Station'
        },
        {
          key: 'e001a002',
          name: 'Post Office'
        },
        {
          key: 'e001a003',
          name: 'Gym Room'
        },
        {
          key: 'e001a004',
          name: 'Fire Station'
        },
        {
          key: 'e001a005',
          name: 'Hospital'
        },
        {
          key: 'e001a006',
          name: 'Burger Making'
        },
        {
          key: 'e001a007',
          name: 'Library'
        },
        {
          key: 'e001a008',
          name: 'Dance Floor'
        },
        {
          key: 'e001a009',
          name: 'FM Station'
        },
        {
          key: 'e001a010',
          name: 'News Room'
        },
        {
          key: 'e001a011',
          name: 'Bank'
        },
        {
          key: 'e001a012',
          name: 'Pottery Room'
        }
      ]
    },
    {
      key: 'e002',
      name: 'Soft Play',
      activities: [
        {
          key: '',
          name: ''
        }
      ]
    },
    {
      key: 'e003',
      name: 'Toddler Play',
      activities: [
        {
          key: '',
          name: ''
        }
      ]
    },
    {
      key: 'e004',
      name: 'Light Exhibits',
      activities: [
        {
          key: '',
          name: ''
        }
      ]
    },
    {
      key: 'e005',
      name: 'Create Yourself',
      activities: [
        {
          key: '',
          name: ''
        }
      ]
    },
    {
      key: 'e006',
      name: 'Electric Magnetic Science',
      activities: [
        {
          key: '',
          name: ''
        }
      ]
    }
  ];

  $scope.exhibitData = {
    'e001a001': {
      key: 'e001a001',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a002': {
      key: 'e001a002',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a003': {
      key: 'e001a003',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a004': {
      key: 'e001a004',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a005': {
      key: 'e001a005',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a006': {
      key: 'e001a006',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a007': {
      key: 'e001a007',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a008': {
      key: 'e001a008',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a009': {
      key: 'e001a009',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a010': {
      key: 'e001a010',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a011': {
      key: 'e001a011',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    },
    'e001a012': {
      key: 'e001a012',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image001.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image002.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image003.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image004.jpg'
        }
      ]
    }
  };
});