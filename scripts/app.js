var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

  $scope.activeExhibit = 'e001';
  $scope.activeActivity = 'e001a004';
  $scope.activeSliderImage = 'image1.jpg';
  $scope.baseSliderPath = './images/gallery';

  $scope.autoSlider = null;
  $scope.autoSliderDuration = 1500;
  $scope.autoSliderCount = 1;

  $scope.triggerAutoSliderFunction = function () {
    if ($scope.autoSliderCount > ($scope.exhibitData[$scope.activeActivity].images.length)) {
      $scope.autoSliderCount = 1;
    } else {
      $scope.activeSliderImage = "image" + $scope.autoSliderCount + ".jpg";
      $scope.autoSliderCount++;
    }
    $scope.$apply()
  };

  $scope.triggerAutoSlider = setInterval($scope.triggerAutoSliderFunction, $scope.autoSliderDuration);

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
      "background-image": "url(" + $scope.baseSliderPath + "/" + image.directoryKey + "/" + image.imageFile + ")"
    }
  };

  $scope.getActiveSliderImageUrl = function () {
    return {"background-image": "url(" + $scope.baseSliderPath + "/" + $scope.exhibitData[$scope.activeActivity].images[0].directoryKey + "/" + $scope.activeSliderImage + ")"}
  };

  $scope.setActiveSliderImage = function (image) {
    clearInterval($scope.triggerAutoSlider);
    $scope.autoSlider = null;
    $scope.activeSliderImage = image;
  };

  $scope.setActiveExhibit = function (key) {
    clearInterval($scope.triggerAutoSlider);
    $scope.activeExhibit = key;
    $scope.activeActivity = key+'a001';
    $scope.activeSliderImage = 'image1.jpg';

    $scope.autoSliderCount = 1;
    $scope.triggerAutoSlider = setInterval($scope.triggerAutoSliderFunction, $scope.autoSliderDuration);
  };

  $scope.setActiveActivity = function (key) {
    clearInterval($scope.triggerAutoSlider);
    $scope.activeActivity = key;
    $scope.activeSliderImage = 'image1.jpg';

    $scope.autoSliderCount = 1;
    $scope.triggerAutoSlider = setInterval($scope.triggerAutoSliderFunction, $scope.autoSliderDuration);
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
        },
        {
          key: 'e001a013',
          name: 'Market'
        },
        {
          key: 'e001a014',
          name: 'School'
        },
        {
          key: 'e001a015',
          name: 'Spa'
        }
      ]
    },
    {
      key: 'e006',
      name: 'Electric Magnetic Science',
      activities: [
        {
          key: 'e006a001',
          name: 'AR Animal'
        },
        {
          key: 'e006a002',
          name: 'Batak Pro'
        },
        {
          key: 'e006a003',
          name: 'Bending Light'
        },
        {
          key: 'e006a004',
          name: 'Bomb Panel'
        },
        {
          key: 'e006a005',
          name: 'Colr Mixing'
        },
        {
          key: 'e006a006',
          name: 'Colour Shadow'
        },
        {
          key: 'e006a007',
          name: 'Excitement Meter'
        },
        {
          key: 'e006a008',
          name: 'Fiber Optic Transmission'
        },
        {
          key: 'e006a009',
          name: 'Frozen Shadow'
        },
//        {
//          key: 'e006a010',
//          name: 'GREEN SCREEN NEWS ROOM'
//        },
        {
          key: 'e006a011',
          name: 'Heart Beat Monitoring'
        },
        {
          key: 'e006a012',
          name: 'Infinity Mirror'
        },
        {
          key: 'e006a013',
          name: 'Kaleidoscope'
        },
        {
          key: 'e006a014',
          name: 'Laser Dodge'
        },
        {
          key: 'e006a015',
          name: 'Laser Music'
        },
        {
          key: 'e006a016',
          name: 'Launch an Airplane'
        },
        {
          key: 'e006a017',
          name: 'Mind Wave Racing'
        },
        {
          key: 'e006a018',
          name: 'Paint with UV Rays'
        },
        {
          key: 'e006a019',
          name: 'Selfie Station'
        },
        {
          key: 'e006a020',
          name: 'Slingshot'
        },
        {
          key: 'e006a021',
          name: 'Solar or Light Driven Car'
        },
        {
          key: 'e006a022',
          name: 'Transparent Display'
        },
        {
          key: 'e006a023',
          name: 'Musical Instrument'
        },
        {
          key: 'e006a024',
          name: 'Wire Loop Game'
        }
      ]
    },
    {
      key: 'e002',
      name: 'Soft Play',
      activities: [
        {
          key: 'e002a001',
          name: 'Soft Play'
        }
      ]
    },
    {
      key: 'e003',
      name: 'Toddler Play',
      activities: [
        {
          key: 'e003a001',
          name: 'Toddler Play'
        }
      ]
    }
//    {
//      key: 'e004',
//      name: 'Light Exhibits',
//      activities: [
//        {
//          key: '',
//          name: ''
//        }
//      ]
//    },
//    {
//      key: 'e005',
//      name: 'Create Yourself',
//      activities: [
//        {
//          key: '',
//          name: ''
//        }
//      ]
//    },
  ];

  $scope.exhibitData = {
    'e001a001': {
      key: 'e001a001',
      parentKey: 'e001',
      name: 'Police Station',
      title: 'Police Station',
      description: 'To support learning through a role play area, we have made many fun resources for educators to use when teaching children about a police station. This role play area is great to motivate boys in the classroom.',
      images: [
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        },
        {
          directoryKey: 'PoliceStation',
          category: 'Police Station',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image2.jpg'
        }
      ]
    },
    'e001a002': {
      key: 'e001a002',
      parentKey: 'e001',
      name: 'Post Office',
      title: 'Post Office',
      description: 'The Play Village has had a flurry of little villagers posting letters and parcels and we are in need of small people who can help sort through the backlog and deliver post around The Village on time.' +
      '\n' +
      '\n' +
      'Before your child loads up their post bag, could you let them know that we need some help in the ‘sorting office’ organising the post so it arrives in the right place.  We are also on the look out for enthusiastic, playful Post Office workers to serve customers who have some very important letters and parcels to post.',
      images: [
        {
          directoryKey: 'PostOffice',
          category: 'Post Office',
          key: 'e001a002',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a003': {
      key: 'e001a003',
      parentKey: 'e001',
      name: 'Gym Room',
      title: 'Gym Room',
      description: 'Gym',
      images: [
        {
          directoryKey: 'GymRoom',
          category: 'Gym Room',
          key: 'e001a001',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a004': {
      key: 'e001a004',
      parentKey: 'e001',
      name: 'Fire Station',
      title: 'Fire Station',
      description: 'Are there any little fire fighters out there who are ready for action and to save the day! There is an important job to do to help keep little villagers safe and out of harms way. We are looking for energetic little people to join The Fire Rescue and be ready for countless imaginary emergency missions.' +
      '\n' +
      '\n' +
      'We need a team of reliable fire fighters ready to attend an emergency at the drop of a hat. They need to be focused and fast to get their fire suits and helmets on, grab their fire extinguishers and jump in the fire engine and drive to the scene.',
      images: [
        {
          directoryKey: 'FireStation',
          category: 'Fire Station',
          key: 'e001a004',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a005': {
      key: 'e001a005',
      parentKey: 'e001',
      name: 'Hospital',
      title: 'Hospital',
      description: '“The doctor will see you now”' +
      '\n' +
      'Dress up as a nurse or doctor, administer injections, take blood pressure and check the temperature of your patients. You can diagnose and prescribe medication, give advice and even become the patient!',
      images: [
        {
          directoryKey: 'Hospital',
          category: 'Hospital',
          key: 'e001a005',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a006': {
      key: 'e001a006',
      parentKey: 'e001',
      name: 'Burger Making',
      title: 'Burger Making',
      description: 'Burger chefs will analyze the art of creating a delicious burger by assembling the layers, including their very own unique burger sauce, and wrapping it up ready to consume later on!',
      images: [
        {
          directoryKey: 'BurgerMaking',
          category: 'Burger Making',
          key: 'e001a006',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a007': {
      key: 'e001a007',
      parentKey: 'e001',
      name: 'Library',
      title: 'Library',
      description: 'Learn what it takes to operate a library with lots of important duties! Children\'s duties will include, selecting, cataloguing and classifying library books for customer collection.',
      images: [
        {
          directoryKey: 'Library',
          category: 'Library',
          key: 'e001a007',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a008': {
      key: 'e001a008',
      parentKey: 'e001',
      name: 'Dance Floor',
      title: 'Dance Floor',
      description: 'Visitors are trained how to be ‘Just Dance’ dance coaches in the academy, learning choreography to improve their coordination and dance techniques to their favourite songs or dance in your own style!',
      images: [
        {
          directoryKey: 'DanceFloor',
          category: 'Dance Floor',
          key: 'e001a008',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a009': {
      key: 'e001a009',
      parentKey: 'e001',
      name: 'FM Station',
      title: 'FM Station',
      description: 'Explore your speech skills' +
      '\n' +
      'Grab the mic and act as RJ to the arena. If bored play a song.',
      images: [
        {
          directoryKey: 'FMStation',
          category: 'FM Station',
          key: 'e001a009',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a010': {
      key: 'e001a010',
      parentKey: 'e006',
      name: 'News Room',
      title: 'News Room',
      description: 'Green screens are used as backdrops in chroma key photography, which is a process that replaces a solid-coloured background from behind the subject of a photo (or video) with a new background. When you watch the weather forecaster on TV standing in front of a map, or Spiderman climbing down a building, you, my friend, are seeing chroma key photography at work! ' +
      '\n' +
      '\n' +
      'You may be wondering, “Why use a green screen or a blue screen?” Because separating a background from a human subject in a photo or video is much easier if the background is made of a solid colour which is not found in human skin tones, like the colours green and blue.',
      images: [
        {
          directoryKey: 'NewsRoom',
          category: 'News Room',
          key: 'e001a010',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a011': {
      key: 'e001a011',
      parentKey: 'e001',
      name: 'Bank',
      title: 'Bank',
      description: 'Bank',
      images: [
        {
          directoryKey: 'Bank',
          category: 'Bank',
          key: 'e001a011',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a012': {
      key: 'e001a012',
      parentKey: 'e001',
      name: 'Pottery Room',
      title: 'Pottery Room',
      description: 'Were an apron be an potters . Explore your creativity' +
      '\n' +
      '\n' +
      'Pottery, one of the oldest and most widespread of the decorative arts, consisting of objects made of clay.',
      images: [
        {
          directoryKey: 'PotteryRoom',
          category: 'Pottery Room',
          key: 'e001a012',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a013': {
      key: 'e001a013',
      parentKey: 'e001',
      name: 'Market',
      title: 'Market',
      description: "What shall we have for dinner? Decisions, decisions! The Play Supermarket has all the charm of a village farm shop with shelves stacked full of plump vibrant play fruit and vegetables." +
      '\n' +
      '\n' +
      "Little shoppers can grab a wicker basket and leisurely peruse what to buy for dinner or perhaps a tasty picnic on the Village Green in the sunshine before making their way to the checkout counter. Did we say that we are looking for some playful little children to work on the supermarket checkout counter and help our Play Makers re-stock the shelves?",
      images: [
        {
          directoryKey: 'Market',
          category: 'Market',
          key: 'e001a013',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a014': {
      key: 'e001a014',
      parentKey: 'e001',
      name: 'School',
      title: 'School',
      description: "The School is play heaven for children who love to play teachers." +
      '\n' +
      '\n' +
      "Our teacher has taken some annual leave and we are really struggling for supply teachers. Can your child stand in and take a couple of classes? They will have to wear a teachers cap and gown so the other children know who they are though! From what we have seen the pupils really enjoy learning and concentrate well on playing at their school desks or reading in the school library.  There’s always a queue outside the Ice-Cream Van after school, so please let your child know to pack up their satchels quickly when the bell has rung.",
      images: [
        {
          directoryKey: 'School',
          category: 'School',
          key: 'e001a014',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e001a015': {
      key: 'e001a015',
      parentKey: 'e001',
      name: 'Spa',
      title: 'Spa',
      description: 'Just a trim off the bottom? Orly’s Hair & Beauty Salon is a bustling play salon for all those children who just love to play hairdressers and show off their creative flair!' +
      '\n' +
      '\n' +
      'Immersed in what feels like a real salon, your child can play endlessly enjoying some pamper time or they can free their creative side, throw on a hairdressers outfit, and play at being a hair stylist creating countless hairstyles on each other or one of the hairdressing mannequins.  Customers are always coming and going in this busy salon, so don’t forget to remind your little one to check for any free nail appointments at the nail station.  If they notice there is nobody at the salon reception desk can you ask them to step in as receptionist to welcome customers and take telephone appointments?',
      images: [
        {
          directoryKey: 'Spa',
          category: 'Spa',
          key: 'e001a015',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e002a001': {
      key: 'e002a001',
      parentKey: 'e002',
      name: 'Soft Play',
      title: 'Soft Play',
      description: 'Sensory soft play areas provide a safe and fun environment for young children to interact and develop essential life skills. Pillows, cushions, bolsters, wedges and tunnels encourage exploration, creativity, motor planning and gross motor abilities.',
      images: [
        {
          directoryKey: 'SoftPlay',
          category: 'Soft Play',
          key: 'e002a001',
          parentKey: 'e001',
          imageFile: 'image1.jpg'
        },
        {
          directoryKey: 'SoftPlay',
          category: 'Soft Play',
          key: 'e002a001',
          parentKey: 'e001',
          imageFile: 'image2.jpg'
        },
        {
          directoryKey: 'SoftPlay',
          category: 'Soft Play',
          key: 'e002a001',
          parentKey: 'e001',
          imageFile: 'image3.jpg'
        },
        {
          directoryKey: 'SoftPlay',
          category: 'Soft Play',
          key: 'e002a001',
          parentKey: 'e001',
          imageFile: 'image4.jpg'
        }
      ]
    },
    'e003a001': {
      key: 'e003a001',
      parentKey: 'e003',
      name: 'Toddler Play',
      title: 'Toddler Play',
      description: 'Play allows children to use their creativity while developing their imagination, dexterity, and physical, cognitive, and emotional strength. Play is important to healthy brain development. It is through play that children at a very early age engage and interact in the world around them.',
      images: [
        {
          directoryKey: 'ToddlerPlay',
          category: 'Toddler Play',
          key: 'e003a001',
          parentKey: 'e003',
          imageFile: 'image1.jpg'
        },
        {
          directoryKey: 'ToddlerPlay',
          category: 'Toddler Play',
          key: 'e003a001',
          parentKey: 'e003',
          imageFile: 'image2.jpg'
        },
        {
          directoryKey: 'ToddlerPlay',
          category: 'Toddler Play',
          key: 'e003a001',
          parentKey: 'e003',
          imageFile: 'image3.jpg'
        },
        {
          directoryKey: 'ToddlerPlay',
          category: 'Toddler Play',
          key: 'e003a001',
          parentKey: 'e003',
          imageFile: 'image4.jpg'
        },
        {
          directoryKey: 'ToddlerPlay',
          category: 'Toddler Play',
          key: 'e003a001',
          parentKey: 'e003',
          imageFile: 'image5.jpg'
        }
      ]
    },
    'e006a001': {
      key: 'e006a001',
      parentKey: 'e006',
      name: 'AR Animal',
      title: 'AR Animal',
      description: 'Animal 4D+ is a fast and lightweight app that allows you to scan the printed animal cards and witness how the animals come alive right before your eyes!',
      images: [
        {
          directoryKey: 'ARAnimal',
          category: 'AR Animal',
          key: 'e006a001',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a002': {
      key: 'e006a002',
      parentKey: 'e006',
      name: 'Batak Pro',
      title: 'Batak Pro',
      description: 'BATAK Pro is a piece of equipment specifically designed to improve reaction, hand eye co-ordination and stamina by enabling sportsmen and women to train under simulated \'sports like\' conditions, whilst also providing an element of fun and competition that is so often lacking in training.',
      images: [
        {
          directoryKey: 'BatakPro',
          category: 'Batak Pro',
          key: 'e006a002',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a003': {
      key: 'e006a003',
      parentKey: 'e006',
      name: 'Bending Light',
      title: 'Bending Light',
      description: 'Light travels more slowly through denser material like water and glass than it does through air. In our experiment, light is going from a denser medium (water) to a less dense medium (air). When this happens, the light actually gets continuously reflected inside the stream of water. This is called total internal reflection. It’s this idea that is used in fiber-optic technology, which can transmit data over long distances through plastic fiber.',
      images: [
        {
          directoryKey: 'BendingLight',
          category: 'Bending Light',
          key: 'e006a003',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a004': {
      key: 'e006a004',
      parentKey: 'e006',
      name: 'Bomb Panel',
      title: 'Bomb Panel',
      description: 'This Game makes the adrenaline rush in the kids. It is focussed on the Concentration, listening skills and Understanding capability of the kid.',
      images: [
        {
          directoryKey: 'BombPanel',
          category: 'Bomb Panel',
          key: 'e006a004',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a005': {
      key: 'e006a005',
      parentKey: 'e006',
      name: 'Color Mixing',
      title: 'Color Mixing',
      description: 'The name of the model comes from the initials of the three additive primary colors, red, green, and blue. The main purpose of the RGB color model is for the sensing, representation and display of images in electronic systems, such as televisions and computers, though it has also been used in conventional photography.',
      images: [
        {
          directoryKey: 'ColorMixing',
          category: 'Color Mixing',
          key: 'e006a005',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a006': {
      key: 'e006a006',
      parentKey: 'e006',
      name: 'Colour Shadow',
      title: 'Colour Shadow',
      description: 'When lights of different colours shine on the same spot on a white surface, the light reflecting from that spot to your eyes is called an additive mixture because it is the sum of all the light.',
      images: [
        {
          directoryKey: 'ColourShadow',
          category: 'Colour Shadow',
          key: 'e006a006',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a007': {
      key: 'e006a007',
      parentKey: 'e006',
      name: 'Excitement Meter',
      title: 'Excitement Meter',
      description: 'This meter shows how excited a person is by sensing the physical movement of the person who is performing.',
      images: [
        {
          directoryKey: 'ExcitementMeter',
          category: 'Excitement Meter',
          key: 'e006a007',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a008': {
      key: 'e006a008',
      parentKey: 'e006',
      name: 'Fiber Optic Transmission',
      title: 'Fiber Optic Transmission',
      description: 'A fiber-optic cable is made up of incredibly thin strands of glass or plastic known as optical fibers; one cable can have as few as two strands or as many as several hundred. Each strand is less than a tenth as thick as a human hair and can carry something like 25,000 telephone calls, so an entire fiber-optic cable can easily carry several million calls.',
      images: [
        {
          directoryKey: 'FiberOpticTransmission',
          category: 'Fiber Optic Transmission',
          key: 'e006a008',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a009': {
      key: 'e006a009',
      parentKey: 'e006',
      name: 'Frozen Shadow',
      title: 'Frozen Shadow',
      description: 'Fluorescence is the emission of light by a substance that has absorbed light or other electromagnetic radiation. It is a form of luminescence. In most cases, the emitted light has a longer wavelength, and therefore lower energy, than the absorbed radiation.',
      images: [
        {
          directoryKey: 'FrozenShadow',
          category: 'Frozen Shadow',
          key: 'e006a009',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
//    'e006a010': {
//      key: 'e006a010',
//      parentKey: 'e006',
//      name: 'Green Screen News Room',
//      title: 'Green Screen News Room',
//      description: 'Green screens are used as backdrops in chroma key photography, which is a process that replaces a solid-coloured background from behind the subject of a photo (or video) with a new background. When you watch the weather forecaster on TV standing in front of a map, or Spiderman climbing down a building, you, my friend, are seeing chroma key photography at work! ' +
//      '\n' +
//      '\n' +
//      'You may be wondering, “Why use a green screen or a blue screen?” Because separating a background from a human subject in a photo or video is much easier if the background is made of a solid colour which is not found in human skin tones, like the colours green and blue.',
//      images: [
//        {
//          directoryKey: 'GreenScreenNewsRoom',
//          category: 'Green Screen News Room',
//          key: 'e006a010',
//          parentKey: 'e006',
//          imageFile: 'image1.jpg'
//        }
//      ]
//    },
    'e006a011': {
      key: 'e006a011',
      parentKey: 'e006',
      name: 'Heat Beat Monitoring',
      title: 'Heat Beat Monitoring',
      description: 'A person’s heartbeat is the sound of the valves in his/her’s heart contracting or expanding as they force blood from one region to another. The number of times the heart beats per minute (BPM), is the heart beat rate and the beat of the heart that can be felt in any artery that lies close to the skin is the pulse.',
      images: [
        {
          directoryKey: 'HeatBeatMonitoring',
          category: 'Heat Beat Monitoring',
          key: 'e006a011',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a012': {
      key: 'e006a012',
      parentKey: 'e006',
      name: 'Infinity Mirror',
      title: 'Infinity Mirror',
      description: 'An infinity mirror is a magical illusion mirror that gives a perception of great depth to a very thin mirror array. The perceived depth can be very many feet even though the mirror may not be actually deeper than a couple of inches.',
      images: [
        {
          directoryKey: 'InfinityMirror',
          category: 'Infinity Mirror',
          key: 'e006a012',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a013': {
      key: 'e006a013',
      parentKey: 'e006',
      name: 'Kaleidoscope',
      title: 'Kaleidoscope',
      description: 'A kaleidoscope is an optical instrument with two or more reflecting surfaces tilted to each other in an angle, so that one or more (parts of) objects on one end of the mirrors are seen as a regular symmetrical pattern when viewed from the other end, due to repeated reflection.',
      images: [
        {
          directoryKey: 'Kaleidoscope',
          category: 'Kaleidoscope',
          key: 'e006a013',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a014': {
      key: 'e006a014',
      parentKey: 'e006',
      name: 'Laser Dodge',
      title: 'Laser Dodge',
      description: 'A laser is a device that emits light through a process of optical amplification based on the stimulated emission of electromagnetic radiation. ' +
      '\n' +
      'A laser differs from other sources of light in that it emits light coherently, spatially and temporally. Spatial coherence allows a laser to be focused to a tight spot, enabling it in our application “The Laser Dodge”. ' +
      '\n' +
      'Using agility, quick thinking, and speed, players avoid a field of laser beams to engage mission objectives. Those quick on their feet and up for a challenge will want to play the game. The inherent challenge of beating your score makes this gameplay easy to learn and impossible to master. Run and jump your way to a high score in our high energy game mode made for the young and young at heart!',
      images: [
        {
          directoryKey: 'LaserDodge',
          category: 'Laser Dodge',
          key: 'e006a014',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a015': {
      key: 'e006a015',
      parentKey: 'e006',
      name: 'Laser Music',
      title: 'Laser Music',
      description: 'A laser harp is an electronic musical user interface and laser lighting display. It projects several laser beams—and a musician plays these by blocking them to produce sounds-reminiscent of a harp.',
      images: [
        {
          directoryKey: 'LaserMusic',
          category: 'Laser Music',
          key: 'e006a015',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a016': {
      key: 'e006a016',
      parentKey: 'e006',
      name: 'Launch an Airplane',
      title: 'Launch an Airplane',
      description: 'The science of paper airplane folding is a great way to learn about flight. This guide takes you through the process of building a motorized paper airplane launching platform. This can be used for fun, or as a standardized way to test different airplane designs, and serves as an excellent introduction to the world of robotics.',
      images: [
        {
          directoryKey: 'LaunchAnAirplane',
          category: 'Launch an Airplane',
          key: 'e006a016',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a017': {
      key: 'e006a017',
      parentKey: 'e006',
      name: 'Mind Wave Racing',
      title: 'Mind Wave Racing',
      description: 'Mind Wave Racing',
      images: [
        {
          directoryKey: 'MindWaveRacing',
          category: 'Mind Wave Racing',
          key: 'e006a017',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a018': {
      key: 'e006a018',
      parentKey: 'e006',
      name: 'Paint with UV Rays',
      title: 'Paint with UV Rays',
      description: 'Fluorescence is the emission of light by a substance that has absorbed light or other electromagnetic radiation. It is a form of luminescence. In most cases, the emitted light has a longer wavelength, and therefore lower energy, than the absorbed radiation. ' +
      '\n' +
      'The most striking example of fluorescence occurs when the absorbed radiation is in the ultraviolet region of the spectrum, and thus invisible to the human eye, while the emitted light is in the visible region, which gives the fluorescent substance a distinct colour that can be seen only when exposed to UV light. ' +
      '\n' +
      'Fluorescent materials cease to glow nearly immediately when the radiation source stops.',
      images: [
        {
          directoryKey: 'PaintWithUVRays',
          category: 'Paint with UV Rays',
          key: 'e006a018',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a019': {
      key: 'e006a019',
      parentKey: 'e006',
      name: 'Selfie Station',
      title: 'Selfie Station',
      description: 'Selfie Station',
      images: [
        {
          directoryKey: 'SelfieStation',
          category: 'Selfie Station',
          key: 'e006a019',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a020': {
      key: 'e006a020',
      parentKey: 'e006',
      name: 'Slingshot',
      title: 'Slingshot',
      description: 'Slingshot',
      images: [
        {
          directoryKey: 'Slingshot',
          category: 'Slingshot',
          key: 'e006a020',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a021': {
      key: 'e006a021',
      parentKey: 'e006',
      name: 'Solar or Light Driven Car',
      title: 'Solar or Light Driven Car',
      description: 'A solar panel works by allowing photons, or particles of light, to knock electrons free from atoms, generating a flow of electricity. Solar panels actually comprise many, smaller units called photovoltaic cells. Photovoltaic simply means they convert sunlight into electricity. Many cells linked together make up a solar panel.',
      images: [
        {
          directoryKey: 'SolarOrLightDrivenCar',
          category: 'Solar or Light Driven Car',
          key: 'e006a021',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a022': {
      key: 'e006a022',
      parentKey: 'e006',
      name: 'Transparent Display',
      title: 'Transparent Display',
      description: 'A video of a Model (or object) is recorded and an acrylic cut - out is created using the outline of their form. A piece of Virtual Rear Projection Film is applied to the upper body, while a printed vinyl graphic is used for the lower body.',
      images: [
        {
          directoryKey: 'TransparentDisplay',
          category: 'Transparent Display',
          key: 'e006a022',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a023': {
      key: 'e006a023',
      parentKey: 'e006',
      name: 'Musical Instrument',
      title: 'Musical Instrument',
      description: 'Change the music by pressing their respective switch.',
      images: [
        {
          directoryKey: 'MusicalInstrument',
          category: 'Musical Instrument',
          key: 'e006a023',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    },
    'e006a024': {
      key: 'e006a024',
      parentKey: 'e006',
      name: 'Wire Loop Game',
      title: 'Wire Loop Game',
      description: 'A wire loop game is a game which involves guiding a metal loop (a \'probe\') along a serpentine length of wire without touching the loop to the wire. The loop and wire are connected to a power source in such a way that, if they touch, they form a closed electric circuit. The circuit is connected to a light and sound-emitting device (Buzzer) when the loop and the wire touch, the light-emitting device will light up, and the sound-emitting device will make a sound.',
      images: [
        {
          directoryKey: 'WireLoopGame',
          category: 'Wire Loop Game',
          key: 'e006a024',
          parentKey: 'e006',
          imageFile: 'image1.jpg'
        }
      ]
    }
  };
});