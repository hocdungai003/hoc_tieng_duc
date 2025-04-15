interface Question {
    id: number;
    sentence: string;
    isCorrect: boolean;
    explanation: string;
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      sentence: 'Der Hund ist ein Katze.',
      isCorrect: false,
      explanation: 'Sai! "Der Hund" (con chó) và "die Katze" (con mèo) là hai loài động vật khác nhau.',
    },
    {
      id: 2,
      sentence: 'Berlin ist die Hauptstadt von Deutschland.',
      isCorrect: true,
      explanation: 'Đúng! Berlin là thủ đô của Đức.',
    },
    {
      id: 3,
      sentence: 'Ich trinke Wasser mit Gabel.',
      isCorrect: false,
      explanation: 'Sai! Không thể uống nước bằng dĩa (Gabel). Chúng ta uống nước bằng cốc (Glas).',
    },
  {
    id: 4,
    sentence: "Die Sonne scheint heute.",
    isCorrect: true,
    explanation: "Đúng! Câu này có nghĩa là 'Mặt trời đang chiếu sáng hôm nay'."
  },
  {
    id: 5,
    sentence: "Ich gehe zur Schule mit dem Flugzeug.",
    isCorrect: false,
    explanation: "Sai! Không ai đi học bằng máy bay (Flugzeug). Thường đi bằng xe đạp, xe buýt hoặc đi bộ."
  },
  {
    id: 6,
    sentence: "Ein Jahr hat zwölf Monate.",
    isCorrect: true,
    explanation: "Đúng! Một năm có mười hai tháng."
  },
  {
    id: 7,
    sentence: "Der Mond ist eine Stadt.",
    isCorrect: false,
    explanation: "Sai! Mặt trăng (der Mond) là một thiên thể, không phải thành phố (Stadt)."
  },
  {
    id: 8,
    sentence: "Ich habe zwei Katzen.",
    isCorrect: true,
    explanation: "Đúng! Câu này có nghĩa là 'Tôi có hai con mèo'."
  },
  {
    id: 9,
    sentence: "Der Tisch kann singen.",
    isCorrect: false,
    explanation: "Sai! Cái bàn (Tisch) không thể hát (singen) vì nó là vật vô tri."
  },
  {
    id: 10,
    sentence: "Deutschland liegt in Europa.",
    isCorrect: true,
    explanation: "Đúng! Đức (Deutschland) nằm ở châu Âu (Europa)."
  },
  {
    id: 11,
    sentence: "Ich esse Suppe mit einem Löffel.",
    isCorrect: true,
    explanation: "Đúng! Chúng ta ăn súp bằng thìa (Löffel)."
  },
  {
    id: 12,
    sentence: "Die Uhr fliegt im Himmel.",
    isCorrect: false,
    explanation: "Sai! Đồng hồ (Uhr) không thể bay (fliegen) trên trời (Himmel)."
  },
  {
    id: 13,
    sentence: "Ein Apfel ist eine Frucht.",
    isCorrect: true,
    explanation: "Đúng! Táo (Apfel) là một loại trái cây (Frucht)."
  },
  {
    id: 14,
    sentence: "Ich schreibe mit einem Kühlschrank.",
    isCorrect: false,
    explanation: "Sai! Không thể viết bằng tủ lạnh (Kühlschrank). Chúng ta viết bằng bút (Stift)."
  },
  {
    id: 15,
    sentence: "Die Woche hat sieben Tage.",
    isCorrect: true,
    explanation: "Đúng! Một tuần có bảy ngày."
  },
  {
    id: 16,
    sentence: "Der Baum wächst im Wasser.",
    isCorrect: false,
    explanation: "Sai! Cây (Baum) thường mọc trên đất, không phải trong nước (Wasser)."
  },
  {
    id: 17,
    sentence: "Ich lerne Deutsch.",
    isCorrect: true,
    explanation: "Đúng! Câu này có nghĩa là 'Tôi đang học tiếng Đức'."
  },
  {
    id: 18,
    sentence: "Die Katze bellt laut.",
    isCorrect: false,
    explanation: "Sai! Mèo (Katze) kêu meo meo, không sủa (bellen). Chó mới sủa."
  },
  {
    id: 19,
    sentence: "Der Himmel ist blau.",
    isCorrect: true,
    explanation: "Đúng! Bầu trời (Himmel) thường có màu xanh (blau)."
  },
  {
    id: 20,
    sentence: "Ich schlafe auf dem Stuhl.",
    isCorrect: false,
    explanation: "Sai! Người ta ngủ trên giường (Bett), không phải trên ghế (Stuhl)."
  },
  {
    id: 21,
    sentence: "Ein Auto fährt auf der Straße.",
    isCorrect: true,
    explanation: "Đúng! Xe hơi (Auto) chạy trên đường (Straße)."
  },
  {
    id: 22,
    sentence: "Der Fisch wohnt im Wald.",
    isCorrect: false,
    explanation: "Sai! Cá (Fisch) sống trong nước, không phải trong rừng (Wald)."
  },
  {
    id: 23,
    sentence: "Ich lese ein Buch.",
    isCorrect: true,
    explanation: "Đúng! Câu này có nghĩa là 'Tôi đang đọc một cuốn sách'."
  },
  {
    id: 24,
    sentence: "Die Tür kann sprechen.",
    isCorrect: false,
    explanation: "Sai! Cửa (Tür) không thể nói (sprechen) vì nó là vật vô tri."
  },
  {
    id: 25,
    sentence: "Hamburg ist eine Stadt in Deutschland.",
    isCorrect: true,
    explanation: "Đúng! Hamburg là một thành phố ở Đức."
  },
  {
    id: 26,
    sentence: "Ich koche Wasser mit einem Bleistift.",
    isCorrect: false,
    explanation: "Sai! Không thể đun nước bằng bút chì (Bleistift). Chúng ta dùng nồi (Topf)."
  },
  {
    id: 27,
    sentence: "Die Milch ist weiß.",
    isCorrect: true,
    explanation: "Đúng! Sữa (Milch) có màu trắng (weiß)."
  },
  {
    id: 28,
    sentence: "Der Vogel schwimmt im Meer.",
    isCorrect: false,
    explanation: "Sai! Chim (Vogel) bay trên trời, không bơi (schwimmen) trong biển (Meer)."
  },
  {
    id: 29,
    sentence: "Ich trinke Kaffee am Morgen.",
    isCorrect: true,
    explanation: "Đúng! Câu này có nghĩa là 'Tôi uống cà phê vào buổi sáng'."
  },
  {
    id: 30,
    sentence: "Der Schuh kocht das Essen.",
    isCorrect: false,
    explanation: "Sai! Giày (Schuh) không thể nấu ăn (kochen). Người nấu ăn."
  },
  {
    id: 31,
    sentence: "Ein Elefant ist ein großes Tier.",
    isCorrect: true,
    explanation: "Đúng! Voi (Elefant) là một con vật lớn (großes Tier)."
  },
  {
    id: 32,
    sentence: "Ich sehe Fernsehen mit einem Löffel.",
    isCorrect: false,
    explanation: "Sai! Không thể xem TV bằng thìa (Löffel). Chúng ta xem bằng mắt."
  },
  {
    id: 33,
    sentence: "Die Blumen blühen im Frühling.",
    isCorrect: true,
    explanation: "Đúng! Hoa (Blumen) nở vào mùa xuân (Frühling)."
  },
  {
    id: 34,
    sentence: "Der Stift isst das Papier.",
    isCorrect: false,
    explanation: "Sai! Bút (Stift) không thể ăn (essen) giấy (Papier)."
  },
  {
    id: 35,
    sentence: "Ich habe einen Hund.",
    isCorrect: true,
    explanation: "Đúng! Câu này có nghĩa là 'Tôi có một con chó'."
  },
  {
    id: 36,
    sentence: "Die Wolke tanzt am Himmel.",
    isCorrect: false,
    explanation: "Sai! Đám mây (Wolke) không thể nhảy múa (tanzen) trên trời."
  },
  {
    id: 37,
    sentence: "Ein Zug fährt auf Schienen.",
    isCorrect: true,
    explanation: "Đúng! Tàu hỏa (Zug) chạy trên đường ray (Schienen)."
  },
  {
    id: 38,
    sentence: "Ich male mit einem Schuh.",
    isCorrect: false,
    explanation: "Sai! Không thể vẽ (malen) bằng giày (Schuh). Chúng ta dùng cọ hoặc bút."
  },
  {
    id: 39,
    sentence: "Die Nacht ist dunkel.",
    isCorrect: true,
    explanation: "Đúng! Ban đêm (Nacht) thường tối (dunkel)."
  },
  {
    id: 40,
    sentence: "Der Kuchen läuft schnell.",
    isCorrect: false,
    explanation: "Sai! Bánh (Kuchen) không thể chạy (laufen) vì nó là đồ ăn."
  },
  {
    id: 41,
    sentence: "Ich wohne in einem Haus.",
    isCorrect: true,
    explanation: "Đúng! Câu này có nghĩa là 'Tôi sống trong một ngôi nhà'."
  },
  {
    id: 42,
    sentence: "Die Lampe singt ein Lied.",
    isCorrect: false,
    explanation: "Sai! Đèn (Lampe) không thể hát (singen) bài hát (Lied)."
  },
  {
    id: 43,
    sentence: "Ein Fluss fließt ins Meer.",
    isCorrect: true,
    explanation: "Đúng! Sông (Fluss) chảy ra biển (Meer)."
  },
  {
    id: 44,
    sentence: "Ich wasche meine Haare mit Zucker.",
    isCorrect: false,
    explanation: "Sai! Không thể gội đầu bằng đường (Zucker). Chúng ta dùng dầu gội (Shampoo)."
  },
  {
    id: 45,
    sentence: "Die Sterne leuchten in der Nacht.",
    isCorrect: true,
    explanation: "Đúng! Các ngôi sao (Sterne) sáng (leuchten) vào ban đêm."
  },
  {
    id: 46,
    sentence: "Der Spiegel liest die Zeitung.",
    isCorrect: false,
    explanation: "Sai! Gương (Spiegel) không thể đọc (lesen) báo (Zeitung)."
  },
  {
    id: 47,
    sentence: "Ich fahre Fahrrad.",
    isCorrect: true,
    explanation: "Đúng! Câu này có nghĩa là 'Tôi đi xe đạp'."
  },
  {
    id: 48,
    sentence: "Das Buch springt vom Tisch.",
    isCorrect: false,
    explanation: "Sai! Sách (Buch) không thể nhảy (springen) khỏi bàn (Tisch)."
  },
  {
    id: 49,
    sentence: "Ein Regenbogen hat viele Farben.",
    isCorrect: true,
    explanation: "Đúng! Cầu vồng (Regenbogen) có nhiều màu sắc (Farben)."
  },
  {
    id: 50,
    sentence: "Ich höre Musik mit einem Apfel.",
    isCorrect: false,
    explanation: "Sai! Không thể nghe nhạc bằng táo (Apfel). Chúng ta dùng tai nghe hoặc loa."
  },
  {
    id: 51,
    sentence: "Ich kaufe Fleisch beim Metzger.",
    isCorrect: true,
    explanation: "Đúng! Người Đức thường mua thịt (Fleisch) ở tiệm thịt (Metzger)."
  },
  {
    id: 52,
    sentence: "Ich trinke Wasser aus einem Schuh.",
    isCorrect: false,
    explanation: "Sai! Nước (Wasser) được uống từ cốc, không phải giày (Schuh)."
  },
  {
    id: 53,
    sentence: "Ich lese ein Buch in der Bibliothek.",
    isCorrect: true,
    explanation: "Đúng! Thư viện (Bibliothek) là nơi phổ biến để đọc sách (Buch)."
  },
  {
    id: 54,
    sentence: "Ich koche Reis im Kamin.",
    isCorrect: false,
    explanation: "Sai! Gạo (Reis) được nấu trong nồi, không phải lò sưởi (Kamin)."
  },
  {
    id: 55,
    sentence: "Ich fahre Ski im Winter.",
    isCorrect: true,
    explanation: "Đúng! Trượt tuyết (Ski fahren) là hoạt động phổ biến vào mùa đông."
  },
  {
    id: 56,
    sentence: "Ich esse Käse mit einem Schraubenzieher.",
    isCorrect: false,
    explanation: "Sai! Phô mai (Käse) được ăn bằng dao hoặc tay, không phải tua vít (Schraubenzieher)."
  },
  {
    id: 57,
    sentence: "Ich gehe spazieren im Wald.",
    isCorrect: true,
    explanation: "Đúng! Đi dạo (spazieren) trong rừng (Wald) là hoạt động thư giãn."
  },
  {
    id: 58,
    sentence: "Ich bezahle Rechnungen mit Keksen.",
    isCorrect: false,
    explanation: "Sai! Hóa đơn (Rechnungen) được trả bằng tiền, không phải bánh quy (Keksen)."
  },
  {
    id: 59,
    sentence: "Ich trinke Glühwein im Winter.",
    isCorrect: true,
    explanation: "Đúng! Rượu vang nóng (Glühwein) là đồ uống phổ biến vào mùa đông."
  },
  {
    id: 60,
    sentence: "Ich schneide Gemüse mit einem Bleistift.",
    isCorrect: false,
    explanation: "Sai! Rau củ (Gemüse) được cắt bằng dao, không phải bút chì (Bleistift)."
  },
  {
    id: 61,
    sentence: "Ich besuche die Familie am Wochenende.",
    isCorrect: true,
    explanation: "Đúng! Thăm gia đình (Familie) là hoạt động phổ biến vào cuối tuần."
  },
  {
    id: 62,
    sentence: "Ich füttere Vögel im Kühlschrank.",
    isCorrect: false,
    explanation: "Sai! Chim (Vögel) được cho ăn ngoài trời, không phải trong tủ lạnh (Kühlschrank)."
  },
  {
    id: 63,
    sentence: "Ich esse Kartoffeln zum Abendessen.",
    isCorrect: true,
    explanation: "Đúng! Khoai tây (Kartoffeln) là món phổ biến cho bữa tối."
  },
  {
    id: 64,
    sentence: "Ich putze Fenster mit Marmelade.",
    isCorrect: false,
    explanation: "Sai! Cửa sổ (Fenster) được lau bằng nước rửa kính, không phải mứt (Marmelade)."
  },
  {
    id: 65,
    sentence: "Ich höre Musik im Auto.",
    isCorrect: true,
    explanation: "Đúng! Nghe nhạc (Musik) trong xe (Auto) rất phổ biến."
  },
  {
    id: 66,
    sentence: "Ich öffne Flaschen mit einem Kissen.",
    isCorrect: false,
    explanation: "Sai! Chai (Flaschen) được mở bằng dụng cụ mở nắp, không phải gối (Kissen)."
  },
  {
    id: 67,
    sentence: "Ich schwimme im Freibad im Sommer.",
    isCorrect: true,
    explanation: "Đúng! Bơi (schwimmen) ở hồ bơi ngoài trời (Freibad) phổ biến vào mùa hè."
  },
  {
    id: 68,
    sentence: "Ich koche Tee mit einem Schuh.",
    isCorrect: false,
    explanation: "Sai! Trà (Tee) được nấu bằng ấm, không phải giày (Schuh)."
  },
  {
    id: 69,
    sentence: "Ich esse Leberwurst auf Brot.",
    isCorrect: true,
    explanation: "Đúng! Xúc xích gan (Leberwurst) thường ăn với bánh mì (Brot)."
  },
  {
    id: 70,
    sentence: "Ich spiele Fußball im Schlafzimmer.",
    isCorrect: false,
    explanation: "Sai! Bóng đá (Fußball) được chơi ngoài sân, không phải trong phòng ngủ (Schlafzimmer)."
  },
  {
    id: 71,
    sentence: "Ich kaufe Blumen im Blumengeschäft.",
    isCorrect: true,
    explanation: "Đúng! Hoa (Blumen) được mua ở tiệm hoa (Blumengeschäft)."
  },
  {
    id: 72,
    sentence: "Ich schlafe im Supermarkt.",
    isCorrect: false,
    explanation: "Sai! Người ta ngủ ở nhà, không phải trong siêu thị (Supermarkt)."
  },
  {
    id: 73,
    sentence: "Ich trinke Milchkaffee am Nachmittag.",
    isCorrect: true,
    explanation: "Đúng! Cà phê sữa (Milchkaffee) là đồ uống phổ biến vào buổi chiều."
  },
  {
    id: 74,
    sentence: "Ich fahre Schlitten mit einem Löffel.",
    isCorrect: false,
    explanation: "Sai! Xe trượt tuyết (Schlitten) không điều khiển bằng thìa (Löffel)."
  },
  {
    id: 75,
    sentence: "Ich besuche ein Café am Samstag.",
    isCorrect: true,
    explanation: "Đúng! Đi quán cà phê (Café) là hoạt động phổ biến vào thứ Bảy."
  },
  {
    id: 76,
    sentence: "Ich wasche Wäsche mit Schokolade.",
    isCorrect: false,
    explanation: "Sai! Giặt quần áo (Wäsche) dùng bột giặt, không phải sô-cô-la (Schokolade)."
  },
  {
    id: 77,
    sentence: "Ich grille im Garten.",
    isCorrect: true,
    explanation: "Đúng! Nướng thịt (grillen) trong vườn (Garten) là hoạt động phổ biến."
  },
  {
    id: 78,
    sentence: "Ich esse Nudeln mit einem Schraubenzieher.",
    isCorrect: false,
    explanation: "Sai! Mì (Nudeln) được ăn bằng nĩa, không phải tua vít (Schraubenzieher)."
  },
  {
    id: 79,
    sentence: "Ich sehe Filme im Kino.",
    isCorrect: true,
    explanation: "Đúng! Xem phim (Filme) ở rạp (Kino) là hoạt động phổ biến."
  },
  {
    id: 80,
    sentence: "Ich koche Suppe mit einem Besen.",
    isCorrect: false,
    explanation: "Sai! Súp (Suppe) được nấu bằng nồi, không phải chổi (Besen)."
  },
  {
    id: 81,
    sentence: "Ich trinke Wasser nach dem Sport.",
    isCorrect: true,
    explanation: "Đúng! Uống nước (Wasser) sau khi tập thể thao (Sport) là thói quen tốt."
  },
  {
    id: 82,
    sentence: "Ich schreibe Briefe mit einem Apfel.",
    isCorrect: false,
    explanation: "Sai! Thư (Briefe) được viết bằng bút, không phải táo (Apfel)."
  },
  {
    id: 83,
    sentence: "Ich esse Schwarzbrot zum Frühstück.",
    isCorrect: true,
    explanation: "Đúng! Bánh mì đen (Schwarzbrot) là món sáng phổ biến ở Đức."
  },
  {
    id: 84,
    sentence: "Ich pflücke Äpfel im Kühlschrank.",
    isCorrect: false,
    explanation: "Sai! Táo (Äpfel) được hái ở vườn, không phải trong tủ lạnh (Kühlschrank)."
  },
  {
    id: 85,
    sentence: "Ich fahre mit dem Bus zur Schule.",
    isCorrect: true,
    explanation: "Đúng! Xe buýt (Bus) là phương tiện phổ biến để đi học."
  },
  {
    id: 86,
    sentence: "Ich esse Eis mit einem Schuh.",
    isCorrect: false,
    explanation: "Sai! Kem (Eis) được ăn bằng thìa, không phải giày (Schuh)."
  },
  {
    id: 87,
    sentence: "Ich besuche den Zoo mit meiner Familie.",
    isCorrect: true,
    explanation: "Đúng! Tham quan sở thú (Zoo) là hoạt động gia đình phổ biến."
  },
  {
    id: 88,
    sentence: "Ich koche Kaffee mit einem Hammer.",
    isCorrect: false,
    explanation: "Sai! Cà phê (Kaffee) được pha bằng máy hoặc phin, không phải búa (Hammer)."
  },
  {
    id: 89,
    sentence: "Ich feiere Oktoberfest in München.",
    isCorrect: true,
    explanation: "Đúng! Oktoberfest là lễ hội bia nổi tiếng ở München."
  },
  {
    id: 90,
    sentence: "Ich wasche mein Auto mit Zucker.",
    isCorrect: false,
    explanation: "Sai! Rửa xe (Auto) dùng nước và xà phòng, không phải đường (Zucker)."
  },
  {
    id: 91,
    sentence: "Ich esse Spätzle mit Soße.",
    isCorrect: true,
    explanation: "Đúng! Mì trứng (Spätzle) thường ăn với nước sốt (Soße) ở Đức."
  },
  {
    id: 92,
    sentence: "Ich höre Musik mit einem Kuchen.",
    isCorrect: false,
    explanation: "Sai! Nghe nhạc (Musik) dùng tai nghe, không phải bánh (Kuchen)."
  },
  {
    id: 93,
    sentence: "Ich kaufe Kleidung im Geschäft.",
    isCorrect: true,
    explanation: "Đúng! Quần áo (Kleidung) được mua ở cửa hàng (Geschäft)."
  },
  {
    id: 94,
    sentence: "Ich schneide Haare mit einem Löffel.",
    isCorrect: false,
    explanation: "Sai! Cắt tóc (Haare) dùng kéo, không phải thìa (Löffel)."
  },
  {
    id: 95,
    sentence: "Ich trinke Bier im Wirtshaus.",
    isCorrect: true,
    explanation: "Đúng! Quán bia (Wirtshaus) là nơi phổ biến để uống bia (Bier)."
  },
  {
    id: 96,
    sentence: "Ich esse Suppe mit einem Schraubenzieher.",
    isCorrect: false,
    explanation: "Sai! Súp (Suppe) được ăn bằng thìa, không phải tua vít (Schraubenzieher)."
  },
  {
    id: 97,
    sentence: "Ich laufe im Park am Abend.",
    isCorrect: true,
    explanation: "Đúng! Chạy bộ (laufen) trong công viên (Park) vào buổi tối là thói quen phổ biến."
  },
  {
    id: 98,
    sentence: "Ich schreibe Notizen mit einem Besen.",
    isCorrect: false,
    explanation: "Sai! Ghi chú (Notizen) được viết bằng bút, không phải chổi (Besen)."
  },
  {
    id: 99,
    sentence: "Ich esse Apfelstrudel zum Nachtisch.",
    isCorrect: true,
    explanation: "Đúng! Bánh táo (Apfelstrudel) là món tráng miệng (Nachtisch) phổ biến."
  },
  {
    id: 100,
    sentence: "Ich wasche Wäsche im Ofen.",
    isCorrect: false,
    explanation: "Sai! Quần áo (Wäsche) được giặt trong máy giặt, không phải lò nướng (Ofen)."
  },
  {
    id: 101,
    sentence: "Ich trinke Mineralwasser zum Mittagessen.",
    isCorrect: true,
    explanation: "Đúng! Nước khoáng (Mineralwasser) là đồ uống phổ biến trong bữa trưa ở Đức."
  },
  {
    id: 102,
    sentence: "Ich fahre mit dem Roller zur Uni.",
    isCorrect: true,
    explanation: "Đúng! Xe máy (Roller) là phương tiện nhiều sinh viên dùng để đến trường đại học (Uni)."
  },
  {
    id: 103,
    sentence: "Ich esse Abendbrot mit einem Schraubenschlüssel.",
    isCorrect: false,
    explanation: "Sai! Bữa tối nhẹ (Abendbrot) được ăn bằng tay, dao hoặc nĩa, không phải cờ lê (Schraubenschlüssel)."
  },
  {
    id: 104,
    sentence: "Ich kaufe Käse in der Käserei.",
    isCorrect: true,
    explanation: "Đúng! Phô mai (Käse) thường được mua ở cửa hàng phô mai (Käserei) hoặc siêu thị."
  },
  {
    id: 105,
    sentence: "Ich wasche mein Gesicht mit Marmelade.",
    isCorrect: false,
    explanation: "Sai! Rửa mặt (Gesicht) dùng nước và xà phòng, không phải mứt (Marmelade)."
  },
  {
    id: 106,
    sentence: "Ich besuche den Bauernmarkt am Samstag.",
    isCorrect: true,
    explanation: "Đúng! Chợ nông sản (Bauernmarkt) là nơi phổ biến để mua thực phẩm tươi vào thứ Bảy."
  },
  {
    id: 107,
    sentence: "Ich schneide Wurst mit einem Kissen.",
    isCorrect: false,
    explanation: "Sai! Xúc xích (Wurst) được cắt bằng dao (Messer), không phải gối (Kissen)."
  },
  {
    id: 108,
    sentence: "Ich trage Hausschuhe zu Hause.",
    isCorrect: true,
    explanation: "Đúng! Người Đức thường mang dép trong nhà (Hausschuhe) để giữ sạch."
  },
  {
    id: 109,
    sentence: "Ich fahre mit dem Bus ins Bett.",
    isCorrect: false,
    explanation: "Sai! Xe buýt (Bus) dùng để đi lại, không phải để đến giường (Bett)."
  },
  {
    id: 110,
    sentence: "Ich sortiere Müll für die Tonne.",
    isCorrect: true,
    explanation: "Đúng! Phân loại rác (Müll) cho thùng (Tonne) là thói quen ở Đức."
  },
  {
    id: 111,
    sentence: "Ich esse Knödel mit Soße.",
    isCorrect: true,
    explanation: "Đúng! Bánh bao (Knödel) thường ăn với nước sốt (Soße) trong ẩm thực Đức."
  },
  {
    id: 112,
    sentence: "Ich koche Kaffee mit einem Handtuch.",
    isCorrect: false,
    explanation: "Sai! Cà phê (Kaffee) được pha bằng máy hoặc phin, không phải khăn (Handtuch)."
  },
  {
    id: 113,
    sentence: "Ich mache eine Pause um drei Uhr.",
    isCorrect: true,
    explanation: "Đúng! Nghỉ giải lao (Pause) vào khoảng 3 giờ chiều là thói quen ở Đức."
  },
  {
    id: 114,
    sentence: "Ich lese Bücher mit einer Gabel.",
    isCorrect: false,
    explanation: "Sai! Sách (Bücher) được đọc bằng mắt, không phải nĩa (Gabel)."
  },
  {
    id: 115,
    sentence: "Ich jogge entlang des Flusses.",
    isCorrect: true,
    explanation: "Đúng! Chạy bộ (joggen) dọc sông (Fluss) là hoạt động phổ biến."
  },
  {
    id: 116,
    sentence: "Ich esse Joghurt mit einem Schuhlöffel.",
    isCorrect: false,
    explanation: "Sai! Sữa chua (Joghurt) được ăn bằng thìa, không phải muôi giày (Schuhlöffel)."
  },
  {
    id: 117,
    sentence: "Ich kaufe Brötchen am Morgen.",
    isCorrect: true,
    explanation: "Đúng! Bánh mì nhỏ (Brötchen) thường được mua vào buổi sáng ở tiệm bánh."
  },
  {
    id: 118,
    sentence: "Ich fahre Schlittschuh im Sommer.",
    isCorrect: false,
    explanation: "Sai! Trượt băng (Schlittschuh fahren) thường diễn ra vào mùa đông, không phải mùa hè (Sommer)."
  },
  {
    id: 119,
    sentence: "Ich trinke Kakao im Winter.",
    isCorrect: true,
    explanation: "Đúng! Ca cao nóng (Kakao) là đồ uống phổ biến vào mùa đông."
  },
  {
    id: 120,
    sentence: "Ich pflanze Gemüse im Wohnzimmer.",
    isCorrect: false,
    explanation: "Sai! Rau củ (Gemüse) được trồng ở vườn, không phải phòng khách (Wohnzimmer)."
  },
  {
    id: 121,
    sentence: "Ich treffe Kollegen in der Kantine.",
    isCorrect: true,
    explanation: "Đúng! Gặp đồng nghiệp (Kollegen) ở căng tin (Kantine) là việc thường làm."
  },
  {
    id: 122,
    sentence: "Ich putze Schuhe mit Zahnpasta.",
    isCorrect: false,
    explanation: "Sai! Giày (Schuhe) được đánh bóng bằng xi, không phải kem đánh răng (Zahnpasta)."
  },
  {
    id: 123,
    sentence: "Ich esse Rouladen zum Sonntagsessen.",
    isCorrect: true,
    explanation: "Đúng! Thịt cuộn (Rouladen) là món phổ biến cho bữa tối Chủ nhật."
  },
  {
    id: 124,
    sentence: "Ich schreibe einen Brief mit einem Besen.",
    isCorrect: false,
    explanation: "Sai! Thư (Brief) được viết bằng bút, không phải chổi (Besen)."
  },
  {
    id: 125,
    sentence: "Ich fahre mit der Straßenbahn in die Stadt.",
    isCorrect: true,
    explanation: "Đúng! Tàu điện (Straßenbahn) là phương tiện phổ biến để vào trung tâm (Stadt)."
  },
  {
    id: 126,
    sentence: "Ich kühle Milch im Ofen.",
    isCorrect: false,
    explanation: "Sai! Sữa (Milch) được làm lạnh trong tủ lạnh, không phải lò nướng (Ofen)."
  },
  {
    id: 127,
    sentence: "Ich besuche den Friseur einmal im Monat.",
    isCorrect: true,
    explanation: "Đúng! Đi cắt tóc (Friseur) mỗi tháng là thói quen của nhiều người."
  },
  {
    id: 128,
    sentence: "Ich esse Obst mit einem Hammer.",
    isCorrect: false,
    explanation: "Sai! Trái cây (Obst) được ăn bằng tay hoặc dao, không phải búa (Hammer)."
  },
  {
    id: 129,
    sentence: "Ich trinke Radler im Sommer.",
    isCorrect: true,
    explanation: "Đúng! Bia pha nước chanh (Radler) là đồ uống mùa hè phổ biến."
  },
  {
    id: 130,
    sentence: "Ich wasche Wäsche mit Honig.",
    isCorrect: false,
    explanation: "Sai! Giặt quần áo (Wäsche) dùng bột giặt, không phải mật ong (Honig)."
  },
  {
    id: 131,
    sentence: "Ich esse Fisch am Freitag.",
    isCorrect: true,
    explanation: "Đúng! Ăn cá (Fisch) vào thứ Sáu là truyền thống ở một số vùng Đức."
  },
  {
    id: 132,
    sentence: "Ich öffne Türen mit einem Apfel.",
    isCorrect: false,
    explanation: "Sai! Cửa (Türen) được mở bằng tay hoặc chìa khóa, không phải táo (Apfel)."
  },
  {
    id: 133,
    sentence: "Ich gehe einkaufen im Supermarkt.",
    isCorrect: true,
    explanation: "Đúng! Mua sắm (einkaufen) ở siêu thị (Supermarkt) là việc hàng ngày."
  },
  {
    id: 134,
    sentence: "Ich koche Suppe mit einem Regenschirm.",
    isCorrect: false,
    explanation: "Sai! Súp (Suppe) được nấu bằng nồi, không phải ô (Regenschirm)."
  },
  {
    id: 135,
    sentence: "Ich spiele Brettspiele mit Freunden.",
    isCorrect: true,
    explanation: "Đúng! Chơi trò chơi bàn (Brettspiele) với bạn bè là hoạt động phổ biến."
  },
  {
    id: 136,
    sentence: "Ich schneide Papier mit einem Löffel.",
    isCorrect: false,
    explanation: "Sai! Giấy (Papier) được cắt bằng kéo, không phải thìa (Löffel)."
  },
  {
    id: 137,
    sentence: "Ich trinke Sekt bei Feiern.",
    isCorrect: true,
    explanation: "Đúng! Rượu vang sủi (Sekt) thường được uống trong các bữa tiệc (Feiern)."
  },
  {
    id: 138,
    sentence: "Ich wasche mein Auto mit Kaffee.",
    isCorrect: false,
    explanation: "Sai! Rửa xe (Auto) dùng nước và xà phòng, không phải cà phê (Kaffee)."
  },
  {
    id: 139,
    sentence: "Ich besuche den Spielplatz mit Kindern.",
    isCorrect: true,
    explanation: "Đúng! Đưa trẻ đến sân chơi (Spielplatz) là hoạt động gia đình phổ biến."
  },
  {
    id: 140,
    sentence: "Ich esse Brot mit einem Schraubenzieher.",
    isCorrect: false,
    explanation: "Sai! Bánh mì (Brot) được ăn bằng tay hoặc dao, không phải tua vít (Schraubenzieher)."
  },
  {
    id: 141,
    sentence: "Ich trinke Kräutertee am Abend.",
    isCorrect: true,
    explanation: "Đúng! Trà thảo mộc (Kräutertee) là đồ uống thư giãn vào buổi tối."
  },
  {
    id: 142,
    sentence: "Ich repariere Möbel mit Zucker.",
    isCorrect: false,
    explanation: "Sai! Sửa đồ nội thất (Möbel) cần dụng cụ, không phải đường (Zucker)."
  },
  {
    id: 143,
    sentence: "Ich esse Maultaschen in Schwaben.",
    isCorrect: true,
    explanation: "Đúng! Bánh bao (Maultaschen) là món đặc sản ở vùng Schwaben."
  },
  {
    id: 144,
    sentence: "Ich höre Musik mit einem Kühlschrank.",
    isCorrect: false,
    explanation: "Sai! Nghe nhạc (Musik) dùng loa hoặc tai nghe, không phải tủ lạnh (Kühlschrank)."
  },
  {
    id: 145,
    sentence: "Ich fahre mit dem Zug nach Hamburg.",
    isCorrect: true,
    explanation: "Đúng! Tàu hỏa (Zug) là cách phổ biến để đi đến Hamburg."
  },
  {
    id: 146,
    sentence: "Ich putze den Boden mit Butter.",
    isCorrect: false,
    explanation: "Sai! Lau sàn (Boden) dùng nước lau sàn, không phải bơ (Butter)."
  },
  {
    id: 147,
    sentence: "Ich esse Quark mit Obst.",
    isCorrect: true,
    explanation: "Đúng! Phô mai tươi (Quark) thường ăn với trái cây (Obst)."
  },
  {
    id: 148,
    sentence: "Ich koche Eier im Schrank.",
    isCorrect: false,
    explanation: "Sai! Trứng (Eier) được nấu trong nồi, không phải tủ (Schrank)."
  },
  {
    id: 149,
    sentence: "Ich besuche die Oper am Abend.",
    isCorrect: true,
    explanation: "Đúng! Xem opera (Oper) là hoạt động văn hóa phổ biến vào buổi tối."
  },
  {
    id: 150,
    sentence: "Ich schneide Nägel mit einem Bleistift.",
    isCorrect: false,
    explanation: "Sai! Cắt móng tay (Nägel) dùng kềm, không phải bút chì (Bleistift)."
  },
  {
    id: 151,
    sentence: "Ich trinke Wasser aus einer Flasche.",
    isCorrect: true,
    explanation: "Đúng! Uống nước (Wasser) từ chai (Flasche) là thói quen phổ biến."
  },
  {
    id: 152,
    sentence: "Ich esse Suppe mit einem Regenschirm.",
    isCorrect: false,
    explanation: "Sai! Súp (Suppe) được ăn bằng thìa, không phải ô (Regenschirm)."
  },
  {
    id: 153,
    sentence: "Ich kaufe Gemüse im Bioladen.",
    isCorrect: true,
    explanation: "Đúng! Rau củ (Gemüse) thường được mua ở cửa hàng hữu cơ (Bioladen)."
  },
  {
    id: 154,
    sentence: "Ich wasche Geschirr mit einem Buch.",
    isCorrect: false,
    explanation: "Sai! Rửa bát (Geschirr) dùng miếng bọt biển, không phải sách (Buch)."
  },
  {
    id: 155,
    sentence: "Ich feiere Silvester mit Freunden.",
    isCorrect: true,
    explanation: "Đúng! Đón năm mới (Silvester) với bạn bè là truyền thống ở Đức."
  },
  {
    id: 156,
    sentence: "Ich koche Nudeln mit einem Schal.",
    isCorrect: false,
    explanation: "Sai! Mì (Nudeln) được nấu bằng nồi, không phải khăn quàng (Schal)."
  },
  {
    id: 157,
    sentence: "Ich esse Currywurst auf der Straße.",
    isCorrect: true,
    explanation: "Đúng! Xúc xích cà ri (Currywurst) là món ăn đường phố phổ biến."
  },
  {
    id: 158,
    sentence: "Ich schreibe Einkaufslisten mit einem Schuh.",
    isCorrect: false,
    explanation: "Sai! Danh sách mua sắm (Einkaufslisten) được viết bằng bút, không phải giày (Schuh)."
  },
  {
    id: 159,
    sentence: "Ich trinke Weißwein zum Abendessen.",
    isCorrect: true,
    explanation: "Đúng! Rượu vang trắng (Weißwein) thường được uống trong bữa tối."
  },
  {
    id: 160,
    sentence: "Ich putze Fenster mit Schokolade.",
    isCorrect: false,
    explanation: "Sai! Cửa sổ (Fenster) được lau bằng nước rửa kính, không phải sô-cô-la (Schokolade)."
  },
  {
    id: 161,
    sentence: "Ich besuche Nachbarn am Abend.",
    isCorrect: true,
    explanation: "Đúng! Thăm hàng xóm (Nachbarn) là hoạt động xã hội phổ biến."
  },
  {
    id: 162,
    sentence: "Ich esse Kuchen mit einem Besen.",
    isCorrect: false,
    explanation: "Sai! Bánh ngọt (Kuchen) được ăn bằng nĩa hoặc tay, không phải chổi (Besen)."
  },
  {
    id: 163,
    sentence: "Ich fahre mit dem Fahrrad zum Bäcker.",
    isCorrect: true,
    explanation: "Đúng! Đi xe đạp (Fahrrad) đến tiệm bánh (Bäcker) là việc thường làm."
  },
  {
    id: 164,
    sentence: "Ich kühle Bier mit einem Föhn.",
    isCorrect: false,
    explanation: "Sai! Bia (Bier) được làm lạnh trong tủ lạnh, không phải máy sấy tóc (Föhn)."
  },
  {
    id: 165,
    sentence: "Ich esse Schinken auf Brot.",
    isCorrect: true,
    explanation: "Đúng! Thịt nguội (Schinken) thường ăn với bánh mì (Brot)."
  },
  {
    id: 166,
    sentence: "Ich öffne Briefe mit einem Löffel.",
    isCorrect: false,
    explanation: "Sai! Thư (Briefe) được mở bằng dao rọc giấy, không phải thìa (Löffel)."
  },
  {
    id: 167,
    sentence: "Ich besuche die Buchhandlung am Wochenende.",
    isCorrect: true,
    explanation: "Đúng! Đi hiệu sách (Buchhandlung) là hoạt động phổ biến vào cuối tuần."
  },
  {
    id: 168,
    sentence: "Ich koche Tee mit einem Schraubenzieher.",
    isCorrect: false,
    explanation: "Sai! Trà (Tee) được pha bằng ấm, không phải tua vít (Schraubenzieher)."
  },
  {
    id: 169,
    sentence: "Ich esse Bratkartoffeln zum Abendessen.",
    isCorrect: true,
    explanation: "Đúng! Khoai tây chiên (Bratkartoffeln) là món tối phổ biến."
  },
  {
    id: 170,
    sentence: "Ich wasche Haare mit Saft.",
    isCorrect: false,
    explanation: "Sai! Gội đầu (Haare) dùng dầu gội, không phải nước ép (Saft)."
  },
  {
    id: 171,
    sentence: "Ich trinke Cappuccino im Café.",
    isCorrect: true,
    explanation: "Đúng! Cà phê cappuccino là đồ uống phổ biến ở quán cà phê (Café)."
  },
  {
    id: 172,
    sentence: "Ich schneide Holz mit einem Löffel.",
    isCorrect: false,
    explanation: "Sai! Gỗ (Holz) được cắt bằng cưa, không phải thìa (Löffel)."
  },
  {
    id: 173,
    sentence: "Ich esse Döner als Mittagessen.",
    isCorrect: true,
    explanation: "Đúng! Bánh mì Döner là món trưa phổ biến ở Đức."
  },
  {
    id: 174,
    sentence: "Ich koche Reis mit einem Handtuch.",
    isCorrect: false,
    explanation: "Sai! Gạo (Reis) được nấu bằng nồi, không phải khăn (Handtuch)."
  },
  {
    id: 175,
    sentence: "Ich besuche einen Flohmarkt am Sonntag.",
    isCorrect: true,
    explanation: "Đúng! Chợ trời (Flohmarkt) là nơi phổ biến để mua đồ vào Chủ nhật."
  },
  {
    id: 176,
    sentence: "Ich esse Eis mit einem Schraubenschlüssel.",
    isCorrect: false,
    explanation: "Sai! Kem (Eis) được ăn bằng thìa, không phải cờ lê (Schraubenschlüssel)."
  },
  {
    id: 177,
    sentence: "Ich trinke Apfelschorle im Sommer.",
    isCorrect: true,
    explanation: "Đúng! Nước táo pha soda (Apfelschorle) là đồ uống mùa hè phổ biến."
  },
  {
    id: 178,
    sentence: "Ich putze Zähne mit Schokolade.",
    isCorrect: false,
    explanation: "Sai! Đánh răng (Zähne) dùng kem đánh răng, không phải sô-cô-la (Schokolade)."
  },
  {
    id: 179,
    sentence: "Ich kaufe Wein im Weingeschäft.",
    isCorrect: true,
    explanation: "Đúng! Rượu vang (Wein) thường được mua ở cửa hàng rượu (Weingeschäft)."
  },
  {
    id: 180,
    sentence: "Ich wasche Wäsche mit einem Kuchen.",
    isCorrect: false,
    explanation: "Sai! Giặt quần áo (Wäsche) dùng bột giặt, không phải bánh (Kuchen)."
  },
  {
    id: 181,
    sentence: "Ich esse Käsekuchen zum Kaffee.",
    isCorrect: true,
    explanation: "Đúng! Bánh phô mai (Käsekuchen) thường ăn với cà phê (Kaffee)."
  },
  {
    id: 182,
    sentence: "Ich kühle Wasser mit einem Bügeleisen.",
    isCorrect: false,
    explanation: "Sai! Nước (Wasser) được làm lạnh trong tủ lạnh, không phải bàn là (Bügeleisen)."
  },
  {
    id: 183,
    sentence: "Ich fahre mit der S-Bahn nach München.",
    isCorrect: true,
    explanation: "Đúng! Tàu S-Bahn là phương tiện phổ biến để đi trong và quanh München."
  },
  {
    id: 184,
    sentence: "Ich schneide Gemüse mit einem Schal.",
    isCorrect: false,
    explanation: "Sai! Rau củ (Gemüse) được cắt bằng dao, không phải khăn quàng (Schal)."
  },
  {
    id: 185,
    sentence: "Ich esse Schnitzel mit Kartoffelsalat.",
    isCorrect: true,
    explanation: "Đúng! Thịt chiên (Schnitzel) thường ăn với salad khoai tây (Kartoffelsalat)."
  },
  {
    id: 186,
    sentence: "Ich öffne Flaschen mit einem Buch.",
    isCorrect: false,
    explanation: "Sai! Chai (Flaschen) được mở bằng dụng cụ mở nắp, không phải sách (Buch)."
  },
  {
    id: 187,
    sentence: "Ich besuche ein Konzert am Freitag.",
    isCorrect: true,
    explanation: "Đúng! Xem hòa nhạc (Konzert) vào thứ Sáu là hoạt động phổ biến."
  },
  {
    id: 188,
    sentence: "Ich koche Eintopf mit einem Schuh.",
    isCorrect: false,
    explanation: "Sai! Món hầm (Eintopf) được nấu bằng nồi, không phải giày (Schuh)."
  },
  {
    id: 189,
    sentence: "Ich trinke Buttermilch zum Frühstück.",
    isCorrect: true,
    explanation: "Đúng! Sữa bơ (Buttermilch) là đồ uống sáng phổ biến ở một số vùng."
  },
  {
    id: 190,
    sentence: "Ich wasche den Boden mit Saft.",
    isCorrect: false,
    explanation: "Sai! Lau sàn (Boden) dùng nước lau sàn, không phải nước ép (Saft)."
  },
  {
    id: 191,
    sentence: "Ich esse Pfannkuchen am Wochenende.",
    isCorrect: true,
    explanation: "Đúng! Bánh kếp (Pfannkuchen) là món ăn cuối tuần phổ biến."
  },
  {
    id: 192,
    sentence: "Ich schreibe Nachrichten mit einem Besen.",
    isCorrect: false,
    explanation: "Sai! Tin nhắn (Nachrichten) được viết bằng điện thoại, không phải chổi (Besen)."
  },
  {
    id: 193,
    sentence: "Ich besuche den Park mit meinem Hund.",
    isCorrect: true,
    explanation: "Đúng! Dắt chó (Hund) đi công viên (Park) là hoạt động hàng ngày."
  },
  {
    id: 194,
    sentence: "Ich koche Kaffee mit einem Kissen.",
    isCorrect: false,
    explanation: "Sai! Cà phê (Kaffee) được pha bằng máy, không phải gối (Kissen)."
  },
  {
    id: 195,
    sentence: "Ich esse Lachs zum Abendessen.",
    isCorrect: true,
    explanation: "Đúng! Cá hồi (Lachs) là món tối phổ biến ở Đức."
  },
  {
    id: 196,
    sentence: "Ich putze Schuhe mit Marmelade.",
    isCorrect: false,
    explanation: "Sai! Giày (Schuhe) được đánh bóng bằng xi, không phải mứt (Marmelade)."
  },
  {
    id: 197,
    sentence: "Ich kaufe Bioeier im Supermarkt.",
    isCorrect: true,
    explanation: "Đúng! Trứng hữu cơ (Bioeier) thường được mua ở siêu thị."
  },
  {
    id: 198,
    sentence: "Ich esse Suppe mit einem Schraubenschlüssel.",
    isCorrect: false,
    explanation: "Sai! Súp (Suppe) được ăn bằng thìa, không phải cờ lê (Schraubenschlüssel)."
  },
  {
    id: 199,
    sentence: "Ich trinke Hefeweizen im Biergarten.",
    isCorrect: true,
    explanation: "Đúng! Bia lúa mì (Hefeweizen) là đồ uống phổ biến ở quán bia (Biergarten)."
  },
  {
    id: 200,
    sentence: "Ich wasche Geschirr mit einem Bleistift.",
    isCorrect: false,
    explanation: "Sai! Rửa bát (Geschirr) dùng miếng bọt biển, không phải bút chì (Bleistift)."
  },
  {
    id: 201,
    sentence: "Ich kaufe frische Eier beim Bauern.",
    isCorrect: true,
    explanation: "Đúng! Mua trứng tươi (frische Eier) từ nông dân (Bauern) là thói quen ở Đức."
  },
  {
    id: 202,
    sentence: "Ich trinke Saft mit einer Gabel.",
    isCorrect: false,
    explanation: "Sai! Nước ép (Saft) được uống bằng cốc, không phải nĩa (Gabel)."
  },
  {
    id: 203,
    sentence: "Ich fahre mit dem Traktor zur Arbeit.",
    isCorrect: false,
    explanation: "Sai! Máy kéo (Traktor) dùng trong nông nghiệp, không phải để đi làm (Arbeit)."
  },
  {
    id: 204,
    sentence: "Ich esse Frühstück um sieben Uhr.",
    isCorrect: true,
    explanation: "Đúng! Ăn sáng (Frühstück) vào khoảng 7 giờ là thói quen phổ biến."
  },
  {
    id: 205,
    sentence: "Ich koche Nudeln mit einem Bügeleisen.",
    isCorrect: false,
    explanation: "Sai! Mì (Nudeln) được nấu bằng nồi, không phải bàn là (Bügeleisen)."
  },
  {
    id: 206,
    sentence: "Ich besuche die Apotheke, wenn ich Medikamente brauche.",
    isCorrect: true,
    explanation: "Đúng! Đi nhà thuốc (Apotheke) để mua thuốc (Medikamente) là việc thường làm."
  },
  {
    id: 207,
    sentence: "Ich schneide Gemüse mit einer Zahnbürste.",
    isCorrect: false,
    explanation: "Sai! Rau củ (Gemüse) được cắt bằng dao, không phải bàn chải đánh răng (Zahnbürste)."
  },
  {
    id: 208,
    sentence: "Ich trinke Milch zum Abendessen.",
    isCorrect: true,
    explanation: "Đúng! Sữa (Milch) là đồ uống phổ biến trong bữa tối ở một số gia đình."
  },
  {
    id: 209,
    sentence: "Ich wasche Wäsche mit einem Kamm.",
    isCorrect: false,
    explanation: "Sai! Giặt quần áo (Wäsche) dùng bột giặt, không phải lược (Kamm)."
  },
  {
    id: 210,
    sentence: "Ich gehe wandern in den Bergen.",
    isCorrect: true,
    explanation: "Đúng! Đi bộ đường dài (wandern) ở núi (Bergen) là hoạt động yêu thích ở Đức."
  },
  {
    id: 211,
    sentence: "Ich esse Käse mit einer Schere.",
    isCorrect: false,
    explanation: "Sai! Phô mai (Käse) được cắt bằng dao, không phải kéo (Schere)."
  },
  {
    id: 212,
    sentence: "Ich kaufe Kleidung im Secondhand-Laden.",
    isCorrect: true,
    explanation: "Đúng! Mua quần áo (Kleidung) ở cửa hàng đồ cũ (Secondhand-Laden) rất phổ biến."
  },
  {
    id: 213,
    sentence: "Ich kühle Wasser mit einer Lampe.",
    isCorrect: false,
    explanation: "Sai! Nước (Wasser) được làm lạnh trong tủ lạnh, không phải đèn (Lampe)."
  },
  {
    id: 214,
    sentence: "Ich esse Leberkäse mit Brötchen.",
    isCorrect: true,
    explanation: "Đúng! Thịt nướng (Leberkäse) thường ăn với bánh mì nhỏ (Brötchen) ở Đức."
  },
  {
    id: 215,
    sentence: "Ich schreibe Notizen mit einem Schneebesen.",
    isCorrect: false,
    explanation: "Sai! Ghi chú (Notizen) được viết bằng bút, không phải cây đánh trứng (Schneebesen)."
  },
  {
    id: 216,
    sentence: "Ich fahre mit dem Fahrrad zur Post.",
    isCorrect: true,
    explanation: "Đúng! Đi xe đạp (Fahrrad) đến bưu điện (Post) là việc thường làm."
  },
  {
    id: 217,
    sentence: "Ich esse Suppe mit einer Socke.",
    isCorrect: false,
    explanation: "Sai! Súp (Suppe) được ăn bằng thìa, không phải tất (Socke)."
  },
  {
    id: 218,
    sentence: "Ich trinke Espresso nach dem Essen.",
    isCorrect: true,
    explanation: "Đúng! Uống espresso sau bữa ăn là thói quen ở Đức."
  },
  {
    id: 219,
    sentence: "Ich putze den Spiegel mit Ketchup.",
    isCorrect: false,
    explanation: "Sai! Lau gương (Spiegel) dùng nước rửa kính, không phải sốt cà chua (Ketchup)."
  },
  {
    id: 220,
    sentence: "Ich besuche den Fitnessraum dreimal pro Woche.",
    isCorrect: true,
    explanation: "Đúng! Tập gym (Fitnessraum) ba lần một tuần là thói quen lành mạnh."
  },
  {
    id: 221,
    sentence: "Ich koche Reis mit einem Hut.",
    isCorrect: false,
    explanation: "Sai! Gạo (Reis) được nấu bằng nồi, không phải mũ (Hut)."
  },
  {
    id: 222,
    sentence: "Ich esse Marmelade auf Toast.",
    isCorrect: true,
    explanation: "Đúng! Mứt (Marmelade) thường được phết lên bánh mì nướng (Toast)."
  },
  {
    id: 223,
    sentence: "Ich öffne Dosen mit einem Handtuch.",
    isCorrect: false,
    explanation: "Sai! Hộp (Dosen) được mở bằng dụng cụ mở nắp, không phải khăn (Handtuch)."
  },
  {
    id: 224,
    sentence: "Ich fahre mit dem Zug nach Köln.",
    isCorrect: true,
    explanation: "Đúng! Tàu hỏa (Zug) là phương tiện phổ biến để đến Köln."
  },
  {
    id: 225,
    sentence: "Ich wasche mein Gesicht mit Senf.",
    isCorrect: false,
    explanation: "Sai! Rửa mặt (Gesicht) dùng nước và xà phòng, không phải mù tạt (Senf)."
  },
  {
    id: 226,
    sentence: "Ich trinke Limonade im Sommer.",
    isCorrect: true,
    explanation: "Đúng! Nước chanh (Limonade) là đồ uống mùa hè phổ biến."
  },
  {
    id: 227,
    sentence: "Ich schneide Brot mit einer Kerze.",
    isCorrect: false,
    explanation: "Sai! Bánh mì (Brot) được cắt bằng dao, không phải nến (Kerze)."
  },
  {
    id: 228,
    sentence: "Ich besuche den Tierarzt mit meinem Hund.",
    isCorrect: true,
    explanation: "Đúng! Đưa chó (Hund) đến bác sĩ thú y (Tierarzt) là việc cần thiết."
  },
  {
    id: 229,
    sentence: "Ich koche Tee mit einem Staubsauger.",
    isCorrect: false,
    explanation: "Sai! Trà (Tee) được pha bằng ấm, không phải máy hút bụi (Staubsauger)."
  },
  {
    id: 230,
    sentence: "Ich esse Spargel im Frühling.",
    isCorrect: true,
    explanation: "Đúng! Măng tây (Spargel) là món ăn mùa xuân phổ biến ở Đức."
  },
  {
    id: 231,
    sentence: "Ich wasche Geschirr mit einem Schal.",
    isCorrect: false,
    explanation: "Sai! Rửa bát (Geschirr) dùng miếng bọt biển, không phải khăn quàng (Schal)."
  },
  {
    id: 232,
    sentence: "Ich fahre mit der Fähre nach Rügen.",
    isCorrect: true,
    explanation: "Đúng! Phà (Fähre) là cách phổ biến để đến đảo Rügen."
  },
  {
    id: 233,
    sentence: "Ich esse Kuchen mit einem Schraubenschlüssel.",
    isCorrect: false,
    explanation: "Sai! Bánh ngọt (Kuchen) được ăn bằng nĩa, không phải cờ lê (Schraubenschlüssel)."
  },
  {
    id: 234,
    sentence: "Ich trinke Wasser während des Sports.",
    isCorrect: true,
    explanation: "Đúng! Uống nước (Wasser) khi tập thể thao (Sports) là thói quen tốt."
  },
  {
    id: 235,
    sentence: "Ich putze den Boden mit Joghurt.",
    isCorrect: false,
    explanation: "Sai! Lau sàn (Boden) dùng nước lau sàn, không phải sữa chua (Joghurt)."
  },
  {
    id: 236,
    sentence: "Ich besuche die Bibliothek am Nachmittag.",
    isCorrect: true,
    explanation: "Đúng! Đi thư viện (Bibliothek) vào buổi chiều là hoạt động phổ biến."
  },
  {
    id: 237,
    sentence: "Ich koche Eier mit einem Föhn.",
    isCorrect: false,
    explanation: "Sai! Trứng (Eier) được nấu bằng nồi, không phải máy sấy tóc (Föhn)."
  },
  {
    id: 238,
    sentence: "Ich esse Honig auf Brot.",
    isCorrect: true,
    explanation: "Đúng! Mật ong (Honig) thường được phết lên bánh mì (Brot)."
  },
  {
    id: 239,
    sentence: "Ich öffne Fenster mit einem Löffel.",
    isCorrect: false,
    explanation: "Sai! Cửa sổ (Fenster) được mở bằng tay, không phải thìa (Löffel)."
  },
  {
    id: 240,
    sentence: "Ich fahre mit dem Auto in den Urlaub.",
    isCorrect: true,
    explanation: "Đúng! Đi xe hơi (Auto) để đi nghỉ (Urlaub) rất phổ biến ở Đức."
  },
  {
    id: 241,
    sentence: "Ich schneide Fleisch mit einem Kissen.",
    isCorrect: false,
    explanation: "Sai! Thịt (Fleisch) được cắt bằng dao, không phải gối (Kissen)."
  },
  {
    id: 242,
    sentence: "Ich trinke Rotwein zum Abendessen.",
    isCorrect: true,
    explanation: "Đúng! Rượu vang đỏ (Rotwein) thường được uống trong bữa tối."
  },
  {
    id: 243,
    sentence: "Ich wasche Haare mit Essig.",
    isCorrect: false,
    explanation: "Sai! Gội đầu (Haare) dùng dầu gội, không phải giấm (Essig)."
  },
  {
    id: 244,
    sentence: "Ich besuche die Bäckerei jeden Morgen.",
    isCorrect: true,
    explanation: "Đúng! Đi tiệm bánh (Bäckerei) mỗi sáng là thói quen phổ biến."
  },
  {
    id: 245,
    sentence: "Ich esse Eis mit einer Zahnbürste.",
    isCorrect: false,
    explanation: "Sai! Kem (Eis) được ăn bằng thìa, không phải bàn chải đánh răng (Zahnbürste)."
  },
  {
    id: 246,
    sentence: "Ich fahre mit dem Roller zur Schule.",
    isCorrect: true,
    explanation: "Đúng! Xe máy (Roller) là phương tiện phổ biến để đi học (Schule)."
  },
  {
    id: 247,
    sentence: "Ich koche Suppe mit einer Brille.",
    isCorrect: false,
    explanation: "Sai! Súp (Suppe) được nấu bằng nồi, không phải kính (Brille)."
  },
  {
    id: 248,
    sentence: "Ich esse Butterbrot zum Frühstück.",
    isCorrect: true,
    explanation: "Đúng! Bánh mì phết bơ (Butterbrot) là món sáng phổ biến."
  },
  {
    id: 249,
    sentence: "Ich putze Schuhe mit Sahne.",
    isCorrect: false,
    explanation: "Sai! Giày (Schuhe) được đánh bóng bằng xi, không phải kem tươi (Sahne)."
  },
  {
    id: 250,
    sentence: "Ich besuche die Kneipe am Abend.",
    isCorrect: true,
    explanation: "Đúng! Đi quán rượu (Kneipe) vào buổi tối là hoạt động xã hội phổ biến."
  },
  {
    id: 251,
    sentence: "Ich schneide Papier mit einer Socke.",
    isCorrect: false,
    explanation: "Sai! Giấy (Papier) được cắt bằng kéo, không phải tất (Socke)."
  },
  {
    id: 252,
    sentence: "Ich trinke Bier nach der Arbeit.",
    isCorrect: true,
    explanation: "Đúng! Uống bia (Bier) sau giờ làm (Arbeit) là thói quen của nhiều người."
  },
  {
    id: 253,
    sentence: "Ich wasche den Tisch mit Öl.",
    isCorrect: false,
    explanation: "Sai! Lau bàn (Tisch) dùng khăn và nước, không phải dầu (Öl)."
  },
  {
    id: 254,
    sentence: "Ich esse Gulasch zum Mittagessen.",
    isCorrect: true,
    explanation: "Đúng! Món thịt hầm (Gulasch) là món trưa phổ biến ở Đức."
  },
  {
    id: 255,
    sentence: "Ich koche Kaffee mit einer Kerze.",
    isCorrect: false,
    explanation: "Sai! Cà phê (Kaffee) được pha bằng máy, không phải nến (Kerze)."
  },
  {
    id: 256,
    sentence: "Ich fahre mit dem Bus ins Kino.",
    isCorrect: true,
    explanation: "Đúng! Đi xe buýt (Bus) đến rạp chiếu phim (Kino) là việc thường làm."
  },
  {
    id: 257,
    sentence: "Ich esse Obst mit einem Staubsauger.",
    isCorrect: false,
    explanation: "Sai! Trái cây (Obst) được ăn bằng tay hoặc dao, không phải máy hút bụi (Staubsauger)."
  },
  {
    id: 258,
    sentence: "Ich trinke Pfefferminztee am Abend.",
    isCorrect: true,
    explanation: "Đúng! Trà bạc hà (Pfefferminztee) là đồ uống thư giãn vào buổi tối."
  },
  {
    id: 259,
    sentence: "Ich putze Fenster mit Zucker.",
    isCorrect: false,
    explanation: "Sai! Cửa sổ (Fenster) được lau bằng nước rửa kính, không phải đường (Zucker)."
  },
  {
    id: 260,
    sentence: "Ich besuche den Markt am Wochenende.",
    isCorrect: true,
    explanation: "Đúng! Đi chợ (Markt) vào cuối tuần là hoạt động phổ biến."
  },
  {
    id: 261,
    sentence: "Ich schneide Wurst mit einer Brille.",
    isCorrect: false,
    explanation: "Sai! Xúc xích (Wurst) được cắt bằng dao, không phải kính (Brille)."
  },
  {
    id: 262,
    sentence: "Ich esse Joghurt mit Müsli.",
    isCorrect: true,
    explanation: "Đúng! Sữa chua (Joghurt) với ngũ cốc (Müsli) là món sáng phổ biến."
  },
  {
    id: 263,
    sentence: "Ich koche Eintopf mit einem Kamm.",
    isCorrect: false,
    explanation: "Sai! Món hầm (Eintopf) được nấu bằng nồi, không phải lược (Kamm)."
  },
  {
    id: 264,
    sentence: "Ich fahre mit der U-Bahn nach Frankfurt.",
    isCorrect: true,
    explanation: "Đúng! Tàu điện ngầm (U-Bahn) là phương tiện phổ biến ở Frankfurt."
  },
  {
    id: 265,
    sentence: "Ich wasche Geschirr mit einer Kerze.",
    isCorrect: false,
    explanation: "Sai! Rửa bát (Geschirr) dùng miếng bọt biển, không phải nến (Kerze)."
  },
  {
    id: 266,
    sentence: "Ich trinke Orangensaft zum Frühstück.",
    isCorrect: true,
    explanation: "Đúng! Nước cam (Orangensaft) là đồ uống sáng phổ biến."
  },
  {
    id: 267,
    sentence: "Ich putze den Boden mit Marmelade.",
    isCorrect: false,
    explanation: "Sai! Lau sàn (Boden) dùng nước lau sàn, không phải mứt (Marmelade)."
  },
  {
    id: 268,
    sentence: "Ich besuche Freunde am Samstagabend.",
    isCorrect: true,
    explanation: "Đúng! Thăm bạn bè (Freunde) vào tối thứ Bảy là hoạt động phổ biến."
  },
  {
    id: 269,
    sentence: "Ich schneide Gemüse mit einem Schneebesen.",
    isCorrect: false,
    explanation: "Sai! Rau củ (Gemüse) được cắt bằng dao, không phải cây đánh trứng (Schneebesen)."
  },
  {
    id: 270,
    sentence: "Ich esse Sauerkraut mit Wurst.",
    isCorrect: true,
    explanation: "Đúng! Dưa cải (Sauerkraut) thường ăn với xúc xích (Wurst)."
  },
  {
    id: 271,
    sentence: "Ich koche Tee mit einer Socke.",
    isCorrect: false,
    explanation: "Sai! Trà (Tee) được pha bằng ấm, không phải tất (Socke)."
  },
  {
    id: 272,
    sentence: "Ich fahre mit dem Fahrrad zum Arzt.",
    isCorrect: true,
    explanation: "Đúng! Đi xe đạp (Fahrrad) đến bác sĩ (Arzt) là việc thường làm."
  },
  {
    id: 273,
    sentence: "Ich esse Brot mit einem Föhn.",
    isCorrect: false,
    explanation: "Sai! Bánh mì (Brot) được ăn bằng tay hoặc dao, không phải máy sấy tóc (Föhn)."
  },
  {
    id: 274,
    sentence: "Ich trinke Milchkaffee am Nachmittag.",
    isCorrect: true,
    explanation: "Đúng! Cà phê sữa (Milchkaffee) là đồ uống phổ biến vào buổi chiều."
  },
  {
    id: 275,
    sentence: "Ich wasche Wäsche mit einer Brille.",
    isCorrect: false,
    explanation: "Sai! Giặt quần áo (Wäsche) dùng bột giặt, không phải kính (Brille)."
  },
  {
    id: 276,
    sentence: "Ich esse Apfelkuchen zum Dessert.",
    isCorrect: true,
    explanation: "Đúng! Bánh táo (Apfelkuchen) là món tráng miệng (Dessert) phổ biến."
  },
  {
    id: 277,
    sentence: "Ich putze den Spiegel mit Essig.",
    isCorrect: false,
    explanation: "Sai! Lau gương (Spiegel) dùng nước rửa kính, không phải giấm (Essig)."
  },
  {
    id: 278,
    sentence: "Ich fahre mit dem Auto zur Uni.",
    isCorrect: true,
    explanation: "Đúng! Đi xe hơi (Auto) đến trường đại học (Uni) là lựa chọn của nhiều người."
  },
  {
    id: 279,
    sentence: "Ich schneide Fleisch mit einem Schneebesen.",
    isCorrect: false,
    explanation: "Sai! Thịt (Fleisch) được cắt bằng dao, không phải cây đánh trứng (Schneebesen)."
  },
  {
    id: 280,
    sentence: "Ich trinke Kamillentee vor dem Schlafengehen.",
    isCorrect: true,
    explanation: "Đúng! Trà hoa cúc (Kamillentee) giúp thư giãn trước khi ngủ."
  },
  {
    id: 281,
    sentence: "Ich koche Reis mit einer Zahnbürste.",
    isCorrect: false,
    explanation: "Sai! Gạo (Reis) được nấu bằng nồi, không phải bàn chải đánh răng (Zahnbürste)."
  },
  {
    id: 282,
    sentence: "Ich esse Brötchen mit Butter.",
    isCorrect: true,
    explanation: "Đúng! Bánh mì nhỏ (Brötchen) với bơ (Butter) là món sáng phổ biến."
  },
  {
    id: 283,
    sentence: "Ich wasche den Tisch mit einer Kerze.",
    isCorrect: false,
    explanation: "Sai! Lau bàn (Tisch) dùng khăn và nước, không phải nến (Kerze)."
  },
  {
    id: 284,
    sentence: "Ich besuche die Messe in Hannover.",
    isCorrect: true,
    explanation: "Đúng! Hội chợ (Messe) ở Hannover là sự kiện nổi tiếng ở Đức."
  },
  {
    id: 285,
    sentence: "Ich esse Suppe mit einem Kissen.",
    isCorrect: false,
    explanation: "Sai! Súp (Suppe) được ăn bằng thìa, không phải gối (Kissen)."
  },
  {
    id: 286,
    sentence: "Ich trinke Cola nach dem Sport.",
    isCorrect: true,
    explanation: "Đúng! Uống cola sau khi tập thể thao (Sport) là lựa chọn của một số người."
  },
  {
    id: 287,
    sentence: "Ich putze Schuhe mit Ketchup.",
    isCorrect: false,
    explanation: "Sai! Giày (Schuhe) được đánh bóng bằng xi, không phải sốt cà chua (Ketchup)."
  },
  {
    id: 288,
    sentence: "Ich fahre mit der Straßenbahn zur Arbeit.",
    isCorrect: true,
    explanation: "Đúng! Tàu điện (Straßenbahn) là phương tiện phổ biến để đi làm."
  },
  {
    id: 289,
    sentence: "Ich schneide Käse mit einem Schal.",
    isCorrect: false,
    explanation: "Sai! Phô mai (Käse) được cắt bằng dao, không phải khăn quàng (Schal)."
  },
  {
    id: 290,
    sentence: "Ich esse Heringssalat zum Abendessen.",
    isCorrect: true,
    explanation: "Đúng! Salad cá trích (Heringssalat) là món tối phổ biến ở một số vùng."
  },
  {
    id: 291,
    sentence: "Ich koche Nudeln mit einem Schraubenschlüssel.",
    isCorrect: false,
    explanation: "Sai! Mì (Nudeln) được nấu bằng nồi, không phải cờ lê (Schraubenschlüssel)."
  },
  {
    id: 292,
    sentence: "Ich trinke Eistee im Sommer.",
    isCorrect: true,
    explanation: "Đúng! Trà đá (Eistee) là đồ uống mùa hè phổ biến."
  },
  {
    id: 293,
    sentence: "Ich wasche Wäsche mit einer Zahnbürste.",
    isCorrect: false,
    explanation: "Sai! Giặt quần áo (Wäsche) dùng bột giặt, không phải bàn chải đánh răng (Zahnbürste)."
  },
  {
    id: 294,
    sentence: "Ich besuche die Sauna am Wochenende.",
    isCorrect: true,
    explanation: "Đúng! Đi xông hơi (Sauna) vào cuối tuần là hoạt động thư giãn."
  },
  {
    id: 295,
    sentence: "Ich esse Kuchen mit einer Kerze.",
    isCorrect: false,
    explanation: "Sai! Bánh ngọt (Kuchen) được ăn bằng nĩa, không phải nến (Kerze)."
  },
  {
    id: 296,
    sentence: "Ich fahre mit dem Zug nach Dresden.",
    isCorrect: true,
    explanation: "Đúng! Tàu hỏa (Zug) là cách phổ biến để đến Dresden."
  },
  {
    id: 297,
    sentence: "Ich schneide Obst mit einem Föhn.",
    isCorrect: false,
    explanation: "Sai! Trái cây (Obst) được cắt bằng dao, không phải máy sấy tóc (Föhn)."
  },
  {
    id: 298,
    sentence: "Ich trinke Kaffee am Morgen.",
    isCorrect: true,
    explanation: "Đúng! Uống cà phê (Kaffee) vào buổi sáng là thói quen phổ biến."
  },
  {
    id: 299,
    sentence: "Ich putze den Spiegel mit Sahne.",
    isCorrect: false,
    explanation: "Sai! Lau gương (Spiegel) dùng nước rửa kính, không phải kem tươi (Sahne)."
  },
  {
    id: 300,
    sentence: "Ich esse Sauerbraten zum Sonntagsessen.",
    isCorrect: true,
    explanation: "Đúng! Thịt bò ngâm giấm (Sauerbraten) là món Chủ nhật truyền thống."
  }
  ];