


  
  const phones = [
    // Tecno phones
    {id: 'tecnophone_1', image: 'https://i.postimg.cc/K819BxsL/Tecno-Spark-10-C-500x500.webp', title: 'Tecno Spark 10C KI5K Dual Sim 128GB/8GB', description: 'The Tecno Spark 10C features a stunning display and powerful performance. With its long-lasting battery, you can enjoy uninterrupted usage throughout the day. Capture every moment with its high-resolution camera.', oldprice: '21999', price: '20899', rating: '4.5', subcategory: 'Tecno'},
    {id: 'tecnophone_2', image: 'https://i.postimg.cc/zvdjHcC0/pop-7-2-500x500.jpg', title: 'Tecno Pop 7 Pro BF7 4G Dual Sim 64GB/4GB', description: 'Experience the ultimate photography experience with the Tecno Pop 7 Pro. Its advanced camera system ensures crisp and clear photos in any lighting condition. Enjoy seamless multitasking with its powerful processor.', oldprice: '13999', price: '16099', rating: '4.8', subcategory: 'Tecno'},
    {id: 'tecnophone_3', image: 'https://i.postimg.cc/FsRGXhvq/TECNO-CH9-CAMON-18-PREMIER-500x500.png', title: 'Tecno Camon 18 Premier Ch9 Dual Sim 256gb/8gb', description: 'Unleash your creativity with the Tecno Camon 18 Premier. Its sleek design and stunning display offer an immersive viewing experience. With its powerful processor and ample storage, you can enjoy lag-free performance and store all your favorite content.', oldprice: '47999', price: '44299', rating: '4.9', subcategory: 'Tecno'},
    {id: 'tecnophone_4', image: 'https://i.postimg.cc/pX6C23Xd/Tecno-Spark-8-P-500x500.jpg', title: 'Tecno Spark 8p Kg7h Dual Sim 128gb/4gb', description: 'The Tecno Spark 8p offers a large display and long-lasting battery life, making it perfect for entertainment on the go. Its powerful processor ensures smooth performance, whether you are gaming or multitasking. Capture every moment with its versatile camera setup.', oldprice: '24999', price: '22399', rating: '4.6', subcategory: 'Tecno'},
    {id: 'tecnophone_5', image: 'https://i.postimg.cc/YCTdxZJP/tecno-spark-10-pro.webp', title: 'Tecno Spark 10 PRO KI7 Dual Sim128GB/8GB', description: 'Get ready for an immersive viewing experience with the Tecno Spark 10 Pro. Its large display and slim bezels provide a stunning visual experience. With its powerful processor and long-lasting battery, you can enjoy all-day usage without interruption.', oldprice: '28999', price: '25999', rating: '4.4', subcategory: 'Tecno'},
    {id: 'tecnophone_6', image: 'https://i.postimg.cc/Wzp83vkd/Tecno-Spark-20-500x500.webp', title: 'Tecno Spark 20 KJ5 Dual Sim 128GB/4GB', description: 'Capture stunning photos and videos with the Tecno Spark 20. Its advanced camera system and AI technology ensure crisp and clear images in any lighting condition. With its powerful processor and ample storage, you can enjoy seamless multitasking and store all your favorite content.', oldprice: '22199', price: '20199', rating: '4.7', subcategory: 'Tecno'},
    
    // Samsung phones
    {id: 'samsungphone_01', image: 'https://i.postimg.cc/ncsQLZJ5/SAMSUNG-GALAXY-S24-ULTRA-GALAXY-Ai-500x500.webp', title: 'Samsung Galaxy S24 Ultra 5G 12GB/512GB Dual Sim', description: 'The S24 Ultra combines style and performance in one sleek package. With its stunning Infinity-U display, you can enjoy immersive viewing experiences. Capture every moment with its versatile quad-camera setup.', oldprice: '245600', price: '240000', rating: '4.6', subcategory: 'Samsung'},
    {id: 'samsungphone_02', image: 'https://i.postimg.cc/HLmJ3yyD/Samsung-Galaxy-Tab-S9-Ultra-500x500.webp', title: 'Samsung Galaxy Tab S9 Ultra 5G 12GB/256GB', description: 'Experience the power of innovation with the Samsung Galaxy Tab S9 Ultra. Its advanced camera system lets you capture stunning photos and videos with ease. With its powerful processor and 5G capabilities, you can enjoy seamless multitasking and lightning-fast downloads.', oldprice: '243599', price: '239000', rating: '4.9', subcategory: 'Samsung'},
    {id: 'samsungphone_03', image: 'https://i.postimg.cc/gJkxbbsg/Samsung-Tab-S9-Graphite-500x500.webp', title: 'Samsung Galaxy Tab S9 5g 11 Inch X716b-128gb/8gb', description: 'The Samsung Galaxy Tab S9 5g offers a stunning display and long-lasting battery life. With its quad-camera setup, you can capture every moment in vivid detail. Experience smooth performance and fast multitasking with its powerful processor.', oldprice: '190000', price: '182000', rating: '4.7', subcategory: 'Samsung'},
    {id: 'samsungphone_04', image: 'https://i.postimg.cc/ZR7CTsD4/Samsung-Galaxy-S24-500x500.webp', title: 'Samsung Galaxy S24+ (Plus) 5G Dual Sim-12GB/256GB', description: 'The Samsung Galaxy S24+ offers a premium smartphone experience at an affordable price. Its stunning display and versatile camera setup ensure crisp and clear images in any lighting condition. With its powerful processor, you can enjoy smooth performance and fast multitasking.', oldprice: '165000', price: '159000', rating: '4.8', subcategory: 'Samsung'},
    {id: 'samsungphone_05', image: 'https://i.postimg.cc/3rqdV6vZ/samsung-galaxy-tab-s8-500x500.jpg', title: 'Samsung Galaxy Tab S8 5g 11 Inch X706b-128gb/8gb – Ex-Display', description: 'Experience the ultimate productivity with the Samsung Galaxy Tab S8. Its large display and S Pen offer a seamless writing and drawing experience. With its powerful processor and ample storage, you can tackle any task with ease.', oldprice: '115000', price: '109000', rating: '4.9', subcategory: 'Samsung'},
    {id: 'samsungphone_06', image: 'https://i.postimg.cc/0jhjSMs4/SAMSUNG-GALAXY-A55-5-G-500x500.webp', title: 'Samsung Galaxy A55 5G DUAL SIM 6GB/128GB', description: 'Samsung Galaxy A35 offers a stunning display and long-lasting battery life. With its quad-camera setup, you can capture every moment in vivid detail. Experience smooth performance and fast multitasking with its powerful processor.', oldprice: '47500', price: '45999', rating: '4.5', subcategory: 'Samsung'},
    
    // Infinix phones
    {id: 'infinixphone_01', image: 'https://i.postimg.cc/cJM2VVkk/smart8-blk-500x500.webp', title: 'Infinix smart 8 X6525 Dual sim 3GB/64GB', description: 'Get ready for an immersive gaming and entertainment experience with the Infinix smart 8 X6525. Its large display and powerful processor ensure smooth performance. Capture stunning photos and videos with its versatile camera setup.', oldprice: '17199', price: '15199', rating: '4.5', subcategory: 'Infinix'},
    {id: 'infinixphone_02', image: 'https://i.postimg.cc/SsS3qDwS/Infinix-Hot-40i-500x500.webp', title: 'Infinix Hot 40i X6528 Dual Sim 256GB/8GB', description: 'The Infinix Hot 40i offers a premium smartphone experience at an affordable price. Its stunning display and powerful processor ensure smooth performance. With its versatile camera setup, you can capture every moment in vivid detail.', oldprice: '26599', price: '24999', rating: '4.8', subcategory: 'Infinix'},
    {id: 'infinixphone_03', image: 'https://i.postimg.cc/3rbV5j9h/INFINIX-HOT-30-NFC-500x500.webp', title: 'Infinix Hot 30 NFC X6831 Dual Sim 256GB/8GB', description: 'Experience the future of mobile photography with the Infinix Hot 30 NFC. Its advanced camera system lets you capture stunning photos and videos in any lighting condition. With its powerful processor and ample storage, you can enjoy seamless multitasking and store all your favorite content.', oldprice: '30000', price: '29099', rating: '4.9', subcategory: 'Infinix'},
    {id: 'infinixphone_04', image: 'https://i.postimg.cc/m2vnhb06/INFINIX-SMART-7-HD-jpg.webp', title: 'Infinix Smart 7 HD X6516 DUAL SIM 2GB/64GB', description: 'The Infinix Smart 7 HD offers a large display and long-lasting battery life, making it perfect for entertainment on the go. Its powerful processor ensures smooth performance, whether you are gaming or multitasking. Capture every moment with its versatile camera setup.', oldprice: '16699', price: '14199', rating: '4.4', subcategory: 'Infinix'},
    {id: 'infinixphone_05', image: 'https://i.postimg.cc/rwhQxMbk/Infinix-Hot-30-Play-1-500x500.webp', title: 'Infinix Hot 30 Play X6835B Dual Sim 128GB/8GB', description: 'Get ready for an immersive gaming and entertainment experience with the Infinix Hot 30 Play. Its large display and powerful processor ensure smooth performance. Capture stunning photos and videos with its versatile camera setup.', oldprice: '23499', price: '20999', rating: '4.6', subcategory: 'Infinix'},
    {id: 'infinixphone_06', image: 'https://i.postimg.cc/rp3jZgMZ/infinix-smart-7-Plus-500x500.jpg', title: 'Infinix Smart 7 Plus X6517 DUAL SIM 3GB/64GB', description: 'The Infinix Smart 7 Plus offers a stunning display and long-lasting battery life. With its quad-camera setup, you can capture every moment in vivid detail. Experience smooth performance and fast multitasking with its powerful processor.', oldprice: '16999', price: '15099', rating: '4.7', subcategory: 'Infinix'}
  ];
  


   const accessories = [
    // Headphones
    { id: 'Headphones_1', image: 'https://i.postimg.cc/15bfMc5X/Beats-by-Dr-Dre-Beats-Solo3-1-1-jpeg.jpg', title: 'Beats Studio Pro Headphones', description: 'Experience industry-leading noise cancellation with the Beats Studio Pro Headphones. Its advanced technology ensures immersive sound quality and personalized listening experiences. Stay connected with its convenient touch controls and long-lasting battery life.', oldprice: '46199', price: '44000', rating: '4.8', subcategory: 'Headphones' },
    { id: 'Headphones_2', image: 'https://i.postimg.cc/RFbMh4Wh/image.webp', title: 'Sony WH-1000XM5 Headphones', description: 'Immerse yourself in your music with the Sony WH-1000XM5 Headphones. Its adaptive noise-canceling technology ensures a distraction-free listening experience. Stay connected with its built-in voice assistant and intuitive touch controls.', oldprice: '55299', price: '50000', rating: '4.7', subcategory: 'Headphones' },
    { id: 'Headphones_3', image: 'https://i.postimg.cc/9FPQt3S8/Awei-A799-BL-Headphones.jpg', title: 'Awei A799BL Gaming Headphones', description: 'Enjoy superior sound quality and comfort with the Awei A799BL Gaming Headphones headphones. Its active noise cancellation ensures a peaceful listening experience, while its premium design offers style and durability.', oldprice: '5000', price: '4700', rating: '4.9', subcategory: 'Headphones' },
    { id: 'Headphones_4', image: 'https://i.postimg.cc/JnJLrZC6/image.webp', title: 'Bose Noise Cancelling Headphones 700', description: 'Experience immersive gaming audio with the Bose Noise Cancelling Headphones 700 headphones. Its JBL QuantumSURROUND technology delivers realistic soundscapes for a competitive advantage. Stay comfortable during long gaming sessions with its ergonomic design and memory foam ear cushions.', oldprice: '42599', price: '41000', rating: '4.6', subcategory: 'Headphones' },

    // Earphones
    { id: 'Earphones_1', image: 'https://i.postimg.cc/8cWbckZm/ojpIr.jpg', title: 'JBL Tune 110 Earphones', description: 'Experience true wireless freedom with the JBL Tune 110 Earphones. Its active noise cancellation ensures immersive sound quality in any environment. Stay connected and control your music with a simple tap or voice command.', oldprice: '42699', price: '4000', rating: '4.9', subcategory: 'Earphones' },
    { id: 'Earphones_2', image: 'https://i.postimg.cc/wvCV9dTY/1605085369-1-300x300.jpg', title: 'JBL TUNE 205BT Wireless Earbud earphones', description: 'Get ready to experience crystal-clear sound with the JBL TUNE 205BT Wireless Earbud earphones. Its intelligent active noise cancellation adjusts to your surroundings for an immersive listening experience. Stay connected and in control with its touch-sensitive controls.', oldprice: '5399', price: '5000', rating: '4.7', subcategory: 'Earphones' },
    { id: 'Earphones_3', image: 'https://i.postimg.cc/br1RJFsD/1605082565-1-300x300.jpg', title: 'JBL TUNE 110BT Wireless Earphones', description: 'Enjoy superior sound quality and comfort with the JBL TUNE 110BT Wireless Earphones earphones. Its industry-leading noise cancellation ensures a distraction-free listening experience, while its ergonomic design offers all-day comfort.', oldprice: '4000', price: '3800', rating: '4.8', subcategory: 'Earphones' },
    { id: 'Earphones_4', image: 'https://i.postimg.cc/jqfcZCZx/1605081664-1-300x300.jpg', title: 'JBL TUNE 110 Wired Earphones', description: 'Experience true wireless freedom with the JBL TUNE 110 Wired Earphones earphones. Its advanced noise-canceling technology ensures crystal-clear sound quality in any environment. Stay connected and in control with its customizable touch controls.', oldprice: '2200', price: '2000', rating: '4.6', subcategory: 'Earphones' },

    // Earpods
    { id: 'Earpods_1', image: 'https://i.postimg.cc/SxdDC5Vc/iqw-BNxi-Zga0-Y4-Yu-DEHg-MFo7-Xlv-PEh8-Fa-Yh-Te3mxr.jpg', title: 'Awei T6 TWS True Wireless Charging bluetooth Earphones', description: 'Enjoy clear and crisp audio with the Awei T6 TWS True Wireless Charging bluetooth Earphones. Its ergonomic design ensures a comfortable fit for all-day listening. Stay connected and in control with its built-in remote and microphone.', oldprice: '5399', price: '4499', rating: '4.5', subcategory: 'Earpods' },
    { id: 'Earpods_2', image: 'https://i.postimg.cc/JhBB3YWp/Lenovo-LP15-Earphones.png', title: 'Lenovo LP15 Earphones', description: 'Experience high-quality sound with the Lenovo LP15 Earphones. Its Type-C connector ensures compatibility with a wide range of devices. Stay connected and in control with its inline remote and microphone.', oldprice: '8199', price: '7000', rating: '4.4', subcategory: 'Earpods' },
    { id: 'Earpods_3', image: 'https://i.postimg.cc/C1GBXZ5D/51e-Uc-LCIAGS-AC-SX522.jpg', title: 'Mi True Wireless Earphones 2 Pro', description: 'Enjoy true wireless freedom with the Mi True Wireless Earphones 2 Pro. Its ergonomic design and lightweight construction ensure all-day comfort. Stay connected and in control with its intuitive touch controls.', oldprice: '5000', price: '4700', rating: '4.3', subcategory: 'Earpods' },


    // Watches
    { id: 'Watches_1', image: 'https://i.postimg.cc/MTyTGXCD/Oraimo-Watch-ER-OSW-42.jpg', title: 'Oraimo Watch ER OSW-42', description: 'Stay connected and in control with the Oraimo Watch ER OSW-42. Its stunning display and advanced features make it the ultimate companion for your active lifestyle. Track your workouts, monitor your health, and stay connected with notifications and calls.', oldprice: '8500', price: '8000', rating: '4.9', subcategory: 'Watches' },
    { id: 'Watches_2', image: 'https://i.postimg.cc/ZqQ7q58C/Huawei-Watch-4-Pro-Titanium-Strap.jpg', title: 'Huawei Watch 4 Pro', description: 'Experience the future of wearable technology with the Huawei Watch 4 Pro. Its sleek design and advanced features make it the perfect companion for your active lifestyle. Track your workouts, monitor your health, and stay connected with notifications and calls.', oldprice: '95000', price: '89000', rating: '4.8', subcategory: 'Watches' },
    { id: 'Watches_3', image: 'https://i.postimg.cc/xTqPX2dm/Redmi-Watch-3-Active-1.jpg', title: 'Redmi Watch 3 Active', description: 'Achieve your fitness goals with the Redmi Watch 3 Active. Its advanced health and fitness tracking features help you stay motivated and on track. With its long-lasting battery life and stylish design, you can wear it all day, every day.', oldprice: '9000', price: '8500', rating: '4.7', subcategory: 'Watches' },
    { id: 'Watches_4', image: 'https://i.postimg.cc/26hX1f8m/Samsung-Galaxy-Watch-6-Classic-a.jpg', title: 'Samsung Galaxy Watch 6 Classic', description: 'Take your workouts to the next level with the Samsung Galaxy Watch 6 Classic. Its advanced GPS and fitness tracking features help you train smarter and achieve your goals. With its built-in music storage, you can listen to your favorite tunes without your phone.', oldprice: '36500', price: '35500', rating: '4.6', subcategory: 'Watches' },
  ];
  

  
  
  
   const computers = [
        //Laptops
      { id: 'Laptops_1', image: 'https://i.postimg.cc/rmwcrkwB/asus-f571g-core-i7-specs-1-300x300.jpg', title: 'Asus F571G Core i7 8th Gen', description: 'Experience ultimate performance and portability with the Asus F571G Core i7 8th Gen laptop. Its stunning InfinityEdge display provides immersive visuals, while its powerful processor ensures seamless multitasking. Stay productive on the go with its long-lasting battery life.', oldprice: '145000', price: '140000', rating: '4.8', subcategory: 'Laptops' },
      { id: 'Laptops_2', image: 'https://i.postimg.cc/xd1QhQV6/Asus-FG505-G-1-300x300.jpg', title: 'Asus FG505G Core i7 9th /16gb/1TB/4gb', description: 'Get ready to unleash your creativity with the Asus FG505G Core i7 9th /16gb/1TB/4gb. Its stunning Retina display and powerful performance make it the ultimate tool for content creators. Stay productive all day with its long-lasting battery life.', oldprice: '145000', price: '140000', rating: '4.9', subcategory: 'Laptops' },
      { id: 'Laptops_3', image: 'https://i.postimg.cc/nLFmWXLN/ASUS-415.png', title: 'ASUS X415MA Intel Celeron N4020', description: 'Experience versatility and power with the ASUS X415MA Intel Celeron N4020 convertible laptop. Its 360-degree hinge allows you to use it in multiple modes, while its powerful processor ensures smooth performance. Stay connected and productive wherever you go.', oldprice: '43000', price: '40000', rating: '4.7', subcategory: 'Laptops' },
      { id: 'Laptops_4', image: 'https://i.postimg.cc/C5VQyCfw/DELL-XPS-13-1-300x300.jpg', title: 'Dell XPS 7390', description: 'Unleash your gaming potential with the Dell XPS 7390 gaming laptop. Its powerful AMD Ryzen processor and NVIDIA GeForce graphics deliver unparalleled performance. Stay cool and comfortable during intense gaming sessions with its innovative cooling system.', oldprice: '250000', price: '243000', rating: '4.8', subcategory: 'Laptops' },
      { id: 'Laptops_5', image: 'https://i.postimg.cc/LXf1WwP0/Dell-XPS-13-7390-2-in-1-300x300.jpg', title: 'Dell xps 13 core i7 touchscreen 4th gen 8gb/256gb', description: 'Experience durability and performance with the Dell xps 13 core i7 touchscreen 4th gen 8gb/256gb laptop. Its lightweight and durable design make it perfect for on-the-go professionals. Stay productive with its powerful processor and long-lasting battery life.', oldprice: '62000', price: '59000', rating: '4.6', subcategory: 'Laptops' },
    
        //Desktops
      { id: 'Desktops_1', image: 'https://i.postimg.cc/1tcptbzV/hp-290-g4-drivers.jpg', title: 'HP 290 G4 Corei3 /4GB/ 1TB/ Dos', description: 'Experience stunning visuals and powerful performance with the HP 290 G4 Corei3 /4GB/ 1TB/ Dos. Its vibrant Retina display and powerful processor make it perfect for creative professionals. Stay productive with its ample storage and seamless multitasking capabilities.', oldprice: '75000', price: '73000', rating: '4.9', subcategory: 'Desktops' },
      { id: 'Desktops_2', image: 'https://i.postimg.cc/RVXxf0YX/HP-290-G4-C-300x300.jpg', title: 'HP 290 G4 Intel Core i7 4GB 1TB HDD 22" TFT Desktop', description: 'Get ready for ultimate performance with the HP 290 G4 Intel Core i7 4GB 1TB HDD 22" TFT Desktop. Its powerful processor and dedicated graphics ensure smooth gaming and multitasking. Stay productive with its ample storage and expandable design.', oldprice: '119000', price: '115000', rating: '4.8', subcategory: 'Desktops' },
      { id: 'Desktops_3', image: 'https://i.postimg.cc/PJ4fCs9c/LENOVO-V30-A-22-1-300x300.jpg', title: 'Lenovo All In One V30A Corei3-10110u', description: 'Experience reliable performance with the Lenovo All In One V30A Corei3-10110u. Its powerful processor and ample storage make it perfect for everyday computing tasks. Stay connected and productive with its sleek design and convenient features.', oldprice: '75000', price: '73000', rating: '4.6', subcategory: 'Desktops' },
      { id: 'Desktops_4', image: 'https://i.postimg.cc/d19cBR6Z/dell-93ryv-3090-mt-i5-8gb-1677883-300x300.jpg', title: 'Dell Optiplex 3090 Core i7 4GB/1TB 22" TFT', description: 'Get ready for smooth performance with the Dell Optiplex 3090 Core i7 4GB/1TB 22" TFT desktop. Its powerful processor and ample storage ensure seamless multitasking and storage of your files. Stay connected and productive with its sleek design and convenient features.', oldprice: '99000', price: '96000', rating: '4.5', subcategory: 'Desktops' },
      { id: 'Desktops_5', image: 'https://i.postimg.cc/ZqBrpVTj/Mac-mini-top-300x300.jpg', title: 'Apple Mac mini M1 8-core CPU', description: 'Experience the convenience of an all-in-one desktop with the Apple Mac mini M1 8-core CPU. Its sleek design and space-saving features make it perfect for home or office use. Stay connected and productive with its powerful processor and vibrant display.', oldprice: '138000', price: '135000', rating: '4.7', subcategory: 'Desktops'}
  ];
  

   
 
   const homeEntertainment = [
    // Woofers
    {id: 'woofer_1', image: 'https://i.postimg.cc/kMF7JdWv/lhd647-1-000w-rms-5-1ch-2tb-dvd-hts.png', title: '1000W-RMS 5.1ch 2TB DVD HTS LHD647 – Home Theater', description: 'Experience deep, punchy sound with the 1000W-RMS 5.1ch 2TB DVD HTS LHD647 – Home Theater. Its EXTRA BASS technology delivers powerful, clear audio, while its rugged design makes it perfect for outdoor use. With its long-lasting battery life, you can keep the party going all day and night.', oldprice: '15200', price: '14000', rating: '4.7', subcategory: 'Woofers'},
    {id: 'woofer_2', image: 'https://i.postimg.cc/y6yDN85L/J608-2-1-CH-Speaker-System70-W-scaled-1-300x300.jpg', title: 'JTC J608 2.1CH Speaker System 70W', description: 'Take your music wherever you go with the JTC J608 2.1CH Speaker System 70W. Its compact design and waterproof construction make it perfect for outdoor adventures. Enjoy crisp, clear sound with its powerful drivers and deep bass.', oldprice: '6495', price: '6295', rating: '4.6', subcategory: 'Woofers'},
    {id: 'woofer_3', image: 'https://i.postimg.cc/Jh9WmjMG/Royal-RL-601-3-1-Channel-Multimedia-Speaker-1-300x300.png', title: 'Royal RL-601 3.1 Channel Multimedia Speaker', description: 'Experience bold sound in a small package with the Royal RL-601 3.1 Channel Multimedia Speaker. Its compact design and vibrant colors make it perfect for on-the-go listening. With its rugged construction and long-lasting battery life, you can take your music wherever you go.', oldprice: '7205', price: '7095', rating: '4.8', subcategory: 'Woofers'},
    {id: 'woofer_4', image: 'https://i.postimg.cc/wBzhrGsv/LG-XBOOM-480-Watts-CJ44-300x300.jpg', title: 'LG CJ44 480 Watts XBOOM', description: 'Make a statement with the LG CJ44 480 Watts XBOOM. Its bold design and powerful sound make it perfect for parties and outdoor events. With its waterproof construction and long-lasting battery life, you can enjoy your music anywhere, rain or shine.', oldprice: '36495', price: '31995', rating: '4.7', subcategory: 'Woofers'},
  
    // TVs
    {id: 'tv-1', image: 'https://i.postimg.cc/sDt8MsbN/Haier-Smart-TV-43-LE43-K6-FG-FRAMELESS-300x300.jpg', title: 'HAIER H43K6FG 43″ Android Frameless Full HD TV', description: 'Experience stunning visuals and immersive sound with the HAIER H43K6FG 43″ Android Frameless Full HD TV. Its Quantum Dot technology delivers vibrant colors and sharp contrast, while its powerful processor ensures smooth performance. With its smart features and voice control, you can easily access your favorite content and control your TV with your voice.', oldprice: '42295', price: '31995', rating: '4.8', subcategory: 'TVs'},
    {id: 'tv-2', image: 'https://i.postimg.cc/hGn50MD8/W020220304536838736330-350-2-300x300.png', title: 'Haier H55S6UG 55″ 4K UHD Android Frameless TV S6 Series', description: 'Immerse yourself in your favorite movies and TV shows with the Haier H55S6UG 55″ 4K UHD Android Frameless TV S6 Series. Its OLED display delivers stunning picture quality with deep blacks and vibrant colors. With its smart features and voice control, you can easily access your favorite content and control your TV with your voice.', oldprice: '79995', price: '87995', rating: '4.9', subcategory: 'TVs'},
    {id: 'tv-3', image: 'https://i.postimg.cc/9fBNgT06/W020220304679329420368-1-300x300.png', title: 'Haier H65K6UG 65″ 4K UHD Android Frameless TV K6 Series', description: 'Enjoy immersive entertainment with the Haier H65K6UG 65″ 4K UHD Android Frameless TV K6 Series. Its Triluminos display and X1 processor deliver vibrant colors and lifelike images. With its smart features and voice control, you can easily access your favorite content and control your TV with your voice.', oldprice: '117595', price: '114595', rating: '4.7', subcategory: 'TVs'},
    {id: 'tv-4', image: 'https://i.postimg.cc/3NkSwc1h/32-A6-GKEN-1-300x300.png', title: 'Hisense 32AGKEN 32 inch HD Smart TV', description: 'Experience cinematic visuals and immersive sound with the Hisense 32AGKEN 32 inch HD Smart TV. Its QLED display and Dolby Atmos sound deliver stunning picture quality and immersive audio. With its Android TV platform, you can access a world of entertainment with ease.', oldprice: '25990', price: '21995', rating: '4.6', subcategory: 'TVs'}
  ];
  
 
  

  
   const gamingProducts = [
    // Gaming Consoles
    {id: 'console_1', image: 'https://i.postimg.cc/6pBf9qpf/65800559b66f1.jpg', title: 'Sony PlayStation 5 Slim', description: 'Experience next-gen gaming with the Sony PlayStation 5 Slim. Its powerful hardware and innovative features deliver immersive gaming experiences. With its lightning-fast SSD and haptic feedback controller, you can enjoy games like never before.', oldprice: '99000', price: '96000', rating: '4.9', subcategory: 'Gaming Consoles'},
    {id: 'console_2', image: 'https://i.postimg.cc/52pqjJHd/nintendo-switch-oled-model.jpg', title: 'Nintendo Switch OLED Model', description: 'Get ready for unparalleled gaming performance with the Nintendo Switch OLED Model. Its powerful hardware and advanced features ensure smooth gameplay and fast load times. With its expansive library of games and backward compatibility, you can enjoy all your favorite titles.', oldprice: '59999', price: '58000', rating: '4.8', subcategory: 'Gaming Consoles'},
    {id: 'console_3', image: 'https://i.postimg.cc/1zjGcKcv/6193801525b79.jpg', title: 'PlayStation 5 Digital Edition Console', description: 'Experience gaming on the go with the PlayStation 5 Digital Edition Console. Its versatile design allows you to play in handheld, tabletop, or TV mode. With its expansive library of games and innovative Joy-Con controllers, you can enjoy gaming wherever you are.', oldprice: '88900', price: '87000', rating: '4.7', subcategory: 'Gaming Consoles'},
    {id: 'console_4', image: 'https://i.postimg.cc/3wRjvqpy/619382cdec880.jpg', title: 'Sony PlayStation 5 (PS5)', description: 'Experience stunning visuals and immersive gameplay with the Sony PlayStation 5 (PS5). Its powerful hardware and enhanced graphics ensure smooth performance and crisp graphics. With its expansive library of games, you can enjoy gaming like never before.', oldprice: '97000', price: '95000', rating: '4.6', subcategory: 'Gaming Consoles'},
  
    // Gaming Controllers
    {id: 'gaming_controller_1', image: 'https://i.postimg.cc/WbtK69vk/sony-ps5-dualsense-wireless-controller-starlight-blue.jpg', title: 'Sony PS5 DualSense Wireless Controller Starlight Blue', description: 'Experience immersive gaming experiences with the Sony PS5 DualSense Wireless Controller Starlight Blue. Its adaptive triggers and haptic feedback deliver realistic sensations for a more immersive gaming experience. With its built-in microphone and rechargeable battery, you can stay connected and in control for hours of gameplay.', oldprice: '13300', price: '12500', rating: '4.7', subcategory: 'Gaming Controllers'},
    {id: 'gaming_controller_2', image: 'https://i.postimg.cc/WbhNF6Y9/sony-ps5-dualsense-wireless-controller-midnight-black.jpg', title: 'Sony PS5 DualSense Wireless Controller Midnight Black', description: 'Get ready for precision gaming with the Sony PS5 DualSense Wireless Controller Midnight Black. Its textured grips and responsive buttons ensure precise control and comfort during gameplay. With its customizable button mapping and compatibility with Xbox Series X|S, Xbox One, and Windows 10 devices, you can tailor your gaming experience to your preferences.', oldprice: '13500', price: '12500', rating: '4.8', subcategory: 'Gaming Controllers'},
    {id: 'gaming_controller_3', image: 'https://i.postimg.cc/HxYHpQ79/nintendo-joy-con-controllers.jpg', title: 'Nintendo Joy-Con Controllers', description: 'Enhance your gaming experience with the Nintendo Joy-Con Controllers. Its ergonomic design and responsive buttons ensure comfort and precision during gameplay. With its motion controls and HD rumble, you can enjoy immersive gaming experiences on your Nintendo Switch.', oldprice: '10500', price: '10000', rating: '4.6', subcategory: 'Gaming Controllers'},
    {id: 'gaming_controller_4', image: 'https://i.postimg.cc/63MKTyrJ/6197399c58154.jpg', title: 'Xbox One Controller Black', description: 'Dominate the competition with the Xbox One Controller Black. Its customizable buttons and interchangeable thumbsticks allow you to tailor your controller to your playstyle. With its ergonomic design and responsive buttons, you can stay comfortable and in control during intense gaming sessions.', oldprice: '9999', price: '9000', rating: '4.9', subcategory: 'Gaming Controllers'}
  ];



  const salesdeals = [
    {id: '5484-JBL-Tune-760NC', image: 'https://i.postimg.cc/XY4TVZPc/navyblue-headphones.png', title: 'JBL Tune 760NC', description: 'Listen wirelessly for 35 hours with active noise cancelling for long-lasting fun, or 50 hours with ANC off. Recharge the battery quickly in 2 hours. Easily control your sound, manage your calls and trigger voice assistants from your headphones with the button on your earcup.', oldprice:'16000', price: '14500', rating: '3.5', subcategory: 'Headphones'},
    {id: '2544-boAt-Airdopes-31', image: 'https://i.postimg.cc/4dqDZWCm/boat203-1.png', title: 'boAt Airdopes 131', description: 'boAt Airdopes 131 offers true wireless experience with latest Bluetooth v5.0. Airdopes 131 offers a nonstop playback of up to 3H with each charge and an additional 12H playtime with the included charging case', oldprice:'7500', price: '6500', rating: '4.1', subcategory: 'Earpods'},
    {id: '5454-boAt-Rockerz-255', image: 'https://i.postimg.cc/rFSBXGfw/boat255r-1.png', title: 'boAt Rockerz 255', description: 'Stay tuned to your favorite music by getting the boAt Rockerz 255R In-Ear Wireless Earphones with Mic online. Flaunting a classic design with super extra bass, these Bluetooth earphones are ideal for those who never compromise on power or sound quality', oldprice:'1700', price: '1350', rating: '3.9', subcategory: 'Earphones'},
    {id: '5411-JBL-Endurance-Run', image: 'https://i.postimg.cc/GmR1Hg4D/jbl-endu-1.png', title: 'JBL Endurance Run', description: 'With a playback of 10 hours, the JBL Endurance Run 2 wireless features an in-line microphone and remote for hands-free control of sound and calls. The magnetic buds secure your JBL Endurance Run 2 wireless conveniently around your neck while not in use', oldprice:'9500', price: '5000', rating: '4.2', subcategory: 'Earphones'},
    {id: '5727-boAt-Rockerz-518', image: 'https://i.postimg.cc/XYLtXjSM/boat518-1.png', title: 'boAt Rockerz 518', description: 'boAt signature sonic high definition sound with super extra bass and balanced treble performance to make your listening experience a thumping one. boAt custom-designed 50mm drivers will give you the performance you could never have imagined.', oldprice:'6300', price: '5700', rating: '3.8', subcategory: 'Headphones'},
    {id: 'JBL Wave 100', image: 'https://i.postimg.cc/SK7Lmsw8/jbl100-1.png', title: 'JBL Wave 100TWS', description: 'Powered by JBL Deep Bass Sound, the JBL Wave 100TWS true wireless headphones color your day with up to 20 hours of playback. Total freedom from wires means hands-free calls and full comfort.', oldprice:'10000', price: '7500', rating: '3.5', subcategory: 'Headphones'}
  ]
 
  const heromainswiper = [
    { image: 'https://i.postimg.cc/BQJzphhV/iphonex.png', subcategory: 'hero-main-slider' },
    { image: 'https://i.postimg.cc/G3FNk0jD/creativeaudio.png', subcategory: 'hero-main-slider' },
    { image: 'https://i.postimg.cc/0jsBLZ9r/gamimgpc.png', subcategory: 'hero-main-slider' },
    { image: 'https://i.postimg.cc/K8phPcY8/17097a-54.jpg', subcategory: 'hero-main-slider' }
  ];

  const productmainswiper = [
    { image: 'https://i.postimg.cc/TPKFmpk2/dell.png', subcategory: 'hero-main-slider' },
    { image: 'https://i.postimg.cc/xCKsyHLQ/tecnocamon.png', subcategory: 'hero-main-slider' },
    { image: 'https://i.postimg.cc/9MTk8s5v/omen.png', subcategory: 'hero-main-slider' },
    { image: 'https://i.postimg.cc/wBnPkgPX/royal.png', subcategory: 'hero-main-slider' }
  ];

  const carouselItems = [
    {
      image: 'https://i.postimg.cc/D0nxCZcX/Virtual.png',
      alt: 'main-banner',
      title: 'RIGHT OUT OF THE BOX.',
      subtitle: 'Gaming Headset',
      description: 'From Ksh 8,000',
      buttonText: 'BUY NOW',
      buttonLink: '/gaming',
    },
    {
      image: 'https://i.postimg.cc/FzpDw4Pn/woman.png',
      alt: 'main-banner',
      title: 'LIGHTWEIGHT & FLAT-FOLDING',
      subtitle: 'JBL TUNE 770NC',
      description: 'Connect with two Bluetooth devices simultaneously',
      buttonText: 'BUY NOW',
      buttonLink: '/accessories',
    },
  ];

  const smallbannersContent = [
    {
      title: 'NEW ARRIVAL',
      subtitle: 'Buy Intex',
      description: 'For Ksh 5,999',
      image: 'https://i.postimg.cc/3xRc5kQj/subwooferblue.png'
    },
    {
      title: 'BEST SALE.',
      subtitle: 'Laptops Max',
      description: 'From Ksh 15,000',
      image: 'https://i.postimg.cc/bJXCtLDL/Whats-App-Image-2024-05-03-at-15-11.png'
    },
    {
      title: '15% OFF',
      subtitle: 'Smartwatch 7',
      description: 'Shop the latest brands',
      image: 'https://i.postimg.cc/Y0zskgSR/smartwatch.png'
    }
  ];
  
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const shuffledPhones = shuffleArray(phones);
  const shuffledAccessories = shuffleArray(accessories);
  const shuffledComputers = shuffleArray(computers);
  const shuffledHomeEntertainment = shuffleArray(homeEntertainment);
  const shuffledGamingProducts = shuffleArray(gamingProducts);

  const ProductData = {
      phones: shuffledPhones,
      accessories: shuffledAccessories,
      computers: shuffledComputers,
      homeEntertainment: shuffledHomeEntertainment,
      gamingProducts: shuffledGamingProducts,
      salesdeals,
      heromainswiper,
      productmainswiper,
      carouselItems,
      smallbannersContent
  };

  export default ProductData;

  