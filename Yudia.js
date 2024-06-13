document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("userInput");
    const chatWindow = document.getElementById("chat-window");
    const sendButton = document.getElementById("sendButton");
    const typingIndicator = document.getElementById("typingIndicator");
    const voiceInputButton = document.getElementById("voiceInputButton");
    const clearHistoryButton = document.getElementById("clearHistoryButton");
    const themeToggleButton = document.getElementById("themeToggleButton");

    const responseDatabase = [
        { user: "Hello", bot: "Hey! How's it going? Have you had a chance to check out any new shows or movies lately?" },
        { user: "What's up", bot: "Not much, just here to chat with you! What have you been up to recently?" },
        { user: "Tell me a joke", bot: "Why don't scientists trust atoms? Because they make up everything!" },
        { user: "How's the weather", bot: "It's looking pretty nice outside! Do you have any plans to go out and enjoy it?" },
        { user: "What's your favorite food", bot: "I love pizza! There's something about the combination of cheese, sauce, and crust that's just perfect." },
        { user: "Do you like music", bot: "Absolutely! I love all kinds of music, from classical to rock. What's your favorite genre?" },
        { user: "Any hobbies", bot: "I enjoy reading, hiking, and coding in my spare time. How about you? Any hobbies you're passionate about?" },
        { user: "Tell me something interesting", bot: "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible." },
        { user: "What's your favorite book", bot: "That's a tough one! There are so many great books out there, but I'd have to say 'To Kill a Mockingbird' is one of my all-time favorites." },
        { user: "How do you stay productive", bot: "I try to stay organized and set clear goals for myself. Also, taking regular breaks helps me stay focused and energized throughout the day." },
        { user: "Where are you from", bot: "I'm from the digital world, created to assist and chat with you! Where are you from?" },
        { user: "What's your name", bot: "I'm Yudi-GPT, your friendly chat assistant. What's your name?" },
        { user: "How old are you", bot: "As a digital entity, I don't have an age like humans do. I'm as old as the data I've been trained on!" },
        { user: "What's your favorite color", bot: "I don't have eyes to see colors, but I've heard blue is very popular!" },
        { user: "What's your favorite movie", bot: "There are so many great movies, but 'Inception' always sparks interesting discussions!" },
        { user: "Do you play games", bot: "I don't play games myself, but I can certainly talk about them! What's your favorite game?" },
        { user: "Do you have any pets", bot: "I don't have pets, but I can help you with information about them. Do you have any pets?" },
        { user: "What's the meaning of life", bot: "That's a profound question! Many believe it's about finding happiness and fulfillment. What do you think?" },
        { user: "Do you believe in aliens", bot: "The universe is vast, and the possibility of extraterrestrial life is fascinating to think about!" },
        { user: "What's your favorite sport", bot: "I enjoy following the data on various sports. Soccer is very popular worldwide. Do you have a favorite sport?" },
        { user: "Can you cook", bot: "I can't cook, but I can certainly help you find recipes and cooking tips! What are you planning to cook?" },
        { user: "Do you speak other languages", bot: "Yes, I can understand and generate text in multiple languages. How can I assist you?" },
        { user: "What's your favorite animal", bot: "I think all animals are interesting in their own way. Do you have a favorite animal?" },
        { user: "Do you believe in ghosts", bot: "Ghosts are a popular subject in many cultures. Whether they exist or not is still up for debate!" },
        { user: "What are you doing", bot: "I'm here, ready to chat and assist you with whatever you need!" },
        { user: "How can I be happy", bot: "Happiness can come from many sources: meaningful relationships, fulfilling activities, and taking care of yourself. What's something that makes you happy?" },
        { user: "What's your favorite holiday", bot: "Many people love holidays like Christmas or New Year's for the joy and celebration they bring. Do you have a favorite holiday?" },
        { user: "Can you tell me a story", bot: "Once upon a time, in a land far away, there was a little village nestled in the mountains. The villagers lived in harmony with nature, and every year they held a festival to celebrate the beauty of their surroundings..." },
        { user: "Do you have friends", bot: "I interact with many people, so I guess you could say I have lots of friends! Who's your best friend?" },
        { user: "What's your favorite song", bot: "I don't have ears to listen to music, but many people love 'Bohemian Rhapsody' by Queen. Do you have a favorite song?" },
        { user: "Can you help me with my homework", bot: "Absolutely! What subject are you working on?" },
        { user: "What's your favorite season", bot: "Every season has its own charm, but many people love the warmth and activity of summer. What's your favorite season?" },
        { user: "Do you like art", bot: "Art is a wonderful form of expression. Whether it's painting, music, or writing, art enriches our lives. Do you create any art?" },
        { user: "What's your favorite TV show", bot: "Many people recommend 'Breaking Bad' for its gripping storyline and character development. Do you have a favorite show?" },
        { user: "Do you like to travel", bot: "I can't travel, but I can help you learn about any place in the world! Where would you like to go?" },
        { user: "What's your dream job", bot: "I'm already living my purpose by helping and chatting with you. What's your dream job?" },
        { user: "What's your favorite drink", bot: "I don't drink, but I've heard coffee is a favorite for many people. What's your favorite drink?" },
        { user: "Can you sing", bot: "I can't sing, but I can share the lyrics to your favorite song. What's a song you like?" },
        { user: "Do you believe in fate", bot: "Fate is an interesting concept that many people believe in. Do you think our lives are predetermined?" },
        { user: "What's the best advice you've ever heard", bot: "One piece of great advice is to focus on what you can control and let go of what you can't. What's the best advice you've received?" },
        { user: "What's your favorite game", bot: "Chess is a classic that many people enjoy for its strategic depth. What's your favorite game?" },
        { user: "Do you like history", bot: "History is fascinating because it helps us understand how we got to where we are today. Do you have a favorite historical period?" },
        { user: "What's your favorite place", bot: "Many people dream of visiting Paris for its rich culture and beautiful architecture. What's your favorite place?" },
        { user: "Can you do math", bot: "Absolutely! I can help you with any math problem. What do you need help with?" },
        { user: "What's your favorite fruit", bot: "Mangoes are often a favorite for their sweet and tropical flavor. What's your favorite fruit?" },
        { user: "Do you like science", bot: "Science is amazing because it helps us understand the world around us. What's your favorite scientific topic?" },
        { user: "What's your favorite movie genre", bot: "Many people enjoy the thrill of action movies. What's your favorite genre?" },
        { user: "Do you like to read", bot: "Reading is a great way to learn and escape into different worlds. Do you have a favorite book?" },
        { user: "What's your favorite subject", bot: "I find all subjects interesting because they offer different ways to understand the world. What's your favorite subject in school?" },
        { user: "Do you like animals", bot: "Animals are fascinating and each species has its own unique traits. Do you have a favorite animal?" },
        { user: "Can you help me learn a new language", bot: "Sure! I can help you with basic phrases and vocabulary in many languages. Which language do you want to learn?" },
        { user: "What's your favorite ice cream flavor", bot: "Many people love chocolate for its rich and creamy taste. What's your favorite flavor?" },
        { user: "Do you believe in magic", bot: "Magic is enchanting and fun to imagine, though most of it can be explained through science. What's your favorite magic trick?" },
        { user: "What's your favorite quote", bot: "One inspiring quote is 'The only way to do great work is to love what you do' by Steve Jobs. Do you have a favorite quote?" },
        { user: "What's your favorite dessert", bot: "Cheesecake is a popular choice for its creamy and delicious flavor. What's your favorite dessert?" },
        { user: "Do you like to dance", bot: "I can't dance, but I can help you find dance tutorials! Do you like to dance?" },
        { user: "What's your favorite TV character", bot: "Many people love Walter White from 'Breaking Bad' for his complex character. Who's your favorite TV character?" },
        { user: "Do you like superheroes", bot: "Superheroes are great for their inspiring stories and incredible abilities. Do you have a favorite superhero?" },
        { user: "What's your favorite holiday destination", bot: "The Maldives are a dream destination for many due to their beautiful beaches. Where would you like to go on holiday?" },
        { user: "Can you solve riddles", bot: "Sure! Give me a riddle, and I'll do my best to solve it." },
        { user: "Do you like fantasy", bot: "Fantasy is a wonderful genre that allows for endless imagination and adventure. Do you have a favorite fantasy story?" },
        { user: "What's your favorite flower", bot: "Roses are a classic favorite for their beauty and fragrance. What's your favorite flower?" },
        { user: "Do you like technology", bot: "I find technology fascinating because it constantly evolves and shapes our world. Do you enjoy using technology?" },
        { user: "What's your favorite type of music", bot: "Many people love the versatility and emotion of pop music. What's your favorite type of music?" },
        { user: "Can you help me with programming", bot: "Absolutely! What programming language or problem do you need help with?" },
        { user: "What's your favorite season", bot: "Every season has its unique charm, but many people love the warmth and activity of summer. What's your favorite season?" },
        { user: "Do you like poetry", bot: "Poetry is a beautiful form of expression. Do you have a favorite poet or poem?" },
        { user: "What's your favorite candy", bot: "Chocolate bars are a popular choice for their rich and satisfying taste. What's your favorite candy?" },
        { user: "Do you believe in destiny", bot: "Destiny is a concept that many find intriguing. Do you believe our lives are pre-planned?" },
        { user: "What's your favorite board game", bot: "Settlers of Catan is a favorite for its strategy and fun gameplay. What's your favorite board game?" },
        { user: "Do you like puzzles", bot: "Puzzles are great for exercising the mind and problem-solving skills. Do you enjoy doing puzzles?" },
        { user: "What's your favorite tree", bot: "The oak tree is admired for its strength and longevity. What's your favorite tree?" },
        { user: "Do you like mysteries", bot: "Mysteries are captivating and keep you on the edge of your seat. Do you have a favorite mystery book or show?" },
        { user: "What's your favorite fast food", bot: "Burgers are a classic favorite for their tasty and convenient meal. What's your favorite fast food?" },
        { user: "Do you like science fiction", bot: "Science fiction is fascinating for its exploration of futuristic concepts and technologies. Do you have a favorite sci-fi story?" },
        { user: "What's your favorite workout", bot: "Running is a popular choice for its simplicity and health benefits. What's your favorite way to exercise?" },
        { user: "Do you like coffee or tea", bot: "Both coffee and tea have their own unique appeal, but many people love coffee for its energizing effect. Do you prefer coffee or tea?" },
        { user: "What's your favorite festival", bot: "Many people love the excitement and joy of Christmas. What's your favorite festival?" },
        { user: "Do you like mythology", bot: "Mythology is rich with fascinating stories and characters. Do you have a favorite myth?" },
        { user: "What's your favorite planet", bot: "Many people find Mars intriguing for its potential to host life. What's your favorite planet?" },
        { user: "Do you like architecture", bot: "Architecture is amazing for its blend of art and engineering. Do you have a favorite building or structure?" },
        { user: "What's your favorite superhero movie", bot: "The Marvel Cinematic Universe is popular for its exciting superhero stories. Do you have a favorite superhero movie?" },
        { user: "Do you like to write", bot: "Writing is a wonderful way to express thoughts and ideas. Do you enjoy writing?" },
        { user: "What's your favorite type of weather", bot: "Many people love sunny weather for its warmth and brightness. What's your favorite type of weather?" },
        { user: "Do you like robots", bot: "Robots are fascinating for their potential to assist and entertain us. Do you like robots?" },
        { user: "What's your favorite subject in school", bot: "Science is a favorite for its exploration of the natural world. What's your favorite subject?" },
        { user: "Do you like to draw", bot: "Drawing is a great way to express creativity. Do you enjoy drawing?" },
        { user: "What's your favorite type of art", bot: "Many people love the visual impact of paintings. What's your favorite type of art?" },
        { user: "Do you like to bake", bot: "Baking is a fun and rewarding activity. Do you enjoy baking?" },
        { user: "What's your favorite app", bot: "Many people find Instagram engaging for sharing and viewing photos. What's your favorite app?" },
        { user: "Do you like flowers", bot: "Flowers are beautiful and bring joy to many. Do you have a favorite flower?" },
        { user: "What's your favorite type of dance", bot: "Many people enjoy the energy and style of hip-hop dance. What's your favorite type of dance?" },
        { user: "Do you like to fish", bot: "Fishing is a relaxing and enjoyable activity for many. Do you like to fish?" },
        { user: "What's your favorite type of vacation", bot: "Beach vacations are popular for their relaxation and beauty. What's your favorite type of vacation?" },
        { user: "Do you like to sew", bot: "Sewing is a creative and practical skill. Do you enjoy sewing?" },
        { user: "What's your favorite vegetable", bot: "Many people love the versatility and flavor of broccoli. What's your favorite vegetable?" },
        { user: "Do you like to garden", bot: "Gardening is a peaceful and rewarding activity. Do you enjoy gardening?" },
        { user: "What's your favorite clothing brand", bot: "Many people love Nike for its quality and style. What's your favorite clothing brand?" },
        { user: "Do you like to swim", bot: "Swimming is a fun and healthy activity. Do you enjoy swimming?" },
        { user: "What's your favorite pizza topping", bot: "Pepperoni is a classic favorite for its spicy and savory taste. What's your favorite pizza topping?" },
        { user: "Do you like to run", bot: "Running is a great way to stay fit and enjoy the outdoors. Do you like to run?" },
        { user: "What's your favorite ice cream topping", bot: "Hot fudge is a popular choice for its rich and delicious flavor. What's your favorite ice cream topping?" },
        { user: "Do you like to hike", bot: "Hiking is a wonderful way to explore nature and get exercise. Do you enjoy hiking?" },
        { user: "What's your favorite animal sound", bot: "Many people find the purring of a cat to be soothing. What's your favorite animal sound?" },
        { user: "Do you like to camp", bot: "Camping is a great way to connect with nature and unwind. Do you like to camp?" },
        { user: "What's your favorite place to relax", bot: "Many people love relaxing at the beach for its calming waves and scenery. What's your favorite place to relax?" },
        { user: "Do you like to read magazines", bot: "Magazines are great for their variety of topics and articles. Do you like to read magazines?" },
        { user: "What's your favorite type of cereal", bot: "Many people love the crunch and flavor of granola. What's your favorite type of cereal?" },
        { user: "Do you like to skateboard", bot: "Skateboarding is a fun and challenging sport. Do you enjoy skateboarding?" },
        { user: "What's your favorite thing to do on the weekend", bot: "Many people love spending weekends with friends and family. What's your favorite weekend activity?" },
        { user: "Do you like to surf", bot: "Surfing is an exhilarating water sport. Do you enjoy surfing?" },
        { user: "What's your favorite time of day", bot: "Many people love the peacefulness of the early morning. What's your favorite time of day?" },
        { user: "Do you like to meditate", bot: "Meditation is a great way to relax and clear the mind. Do you like to meditate?" },
        { user: "What's your favorite flavor of cake", bot: "Chocolate cake is a classic favorite for its rich flavor. What's your favorite flavor of cake?" },
        { user: "Do you like to play chess", bot: "Chess is a great game for strategic thinking. Do you like to play chess?" },
        { user: "What's your favorite type of soup", bot: "Tomato soup is a comforting and delicious choice. What's your favorite type of soup?" },
        { user: "Do you like to play cards", bot: "Card games are fun and great for socializing. Do you enjoy playing cards?" },
        { user: "What's your favorite type of cookie", bot: "Chocolate chip cookies are a timeless favorite. What's your favorite type of cookie?" },
        { user: "Do you like to solve puzzles", bot: "Puzzles are excellent for keeping the mind sharp. Do you enjoy solving puzzles?" },
        { user: "What's your favorite type of tea", bot: "Green tea is loved for its health benefits and flavor. What's your favorite type of tea?" },
        { user: "Do you like to do yoga", bot: "Yoga is wonderful for both physical and mental well-being. Do you like to practice yoga?" },
        { user: "What's your favorite type of pasta", bot: "Spaghetti is a classic favorite for many. What's your favorite type of pasta?" },
        { user: "Do you like to play soccer", bot: "Soccer is a popular and exciting sport. Do you enjoy playing soccer?" },
        { user: "What's your favorite type of salad", bot: "Caesar salad is a popular choice for its flavor and simplicity. What's your favorite type of salad?" },
        { user: "Do you like to play basketball", bot: "Basketball is fast-paced and fun to play. Do you like playing basketball?" },
        { user: "What's your favorite smoothie flavor", bot: "Strawberry banana is a classic smoothie favorite. What's your favorite smoothie flavor?" },
        { user: "Do you like to play tennis", bot: "Tennis is a great sport for agility and strategy. Do you enjoy playing tennis?" },
        { user: "What's your favorite type of sandwich", bot: "A BLT sandwich is a classic favorite. What's your favorite type of sandwich?" },
        { user: "Do you like to play video games", bot: "Video games are fun and immersive. Do you enjoy playing video games?" },
        { user: "What's your favorite type of pie", bot: "Apple pie is a timeless favorite. What's your favorite type of pie?" },
        { user: "Do you like to play golf", bot: "Golf is relaxing and challenging. Do you like to play golf?" },
        { user: "What's your favorite breakfast food", bot: "Pancakes are a delicious breakfast choice. What's your favorite breakfast food?" },
        { user: "Do you like to snowboard", bot: "Snowboarding is thrilling and fun. Do you enjoy snowboarding?" },
        { user: "What's your favorite type of cheese", bot: "Cheddar cheese is versatile and tasty. What's your favorite type of cheese?" },
        { user: "Do you like to ice skate", bot: "Ice skating is graceful and fun. Do you enjoy ice skating?" },
        { user: "What's your favorite type of fruit", bot: "Mangoes are a favorite for their sweet taste. What's your favorite type of fruit?" },
        { user: "Do you like to ski", bot: "Skiing is exhilarating and fun. Do you enjoy skiing?" },
        { user: "What's your favorite hot drink", bot: "Hot chocolate is comforting and delicious. What's your favorite hot drink?" },
        { user: "Do you like to watch movies", bot: "Movies are a great way to relax and be entertained. Do you like watching movies?" },
        { user: "What's your favorite cold drink", bot: "Iced tea is refreshing and tasty. What's your favorite cold drink?" },
        { user: "Do you like to watch TV shows", bot: "TV shows are great for binge-watching. Do you enjoy watching TV shows?" },
        { user: "What's your favorite fruit juice", bot: "Orange juice is a refreshing classic. What's your favorite fruit juice?" },
        { user: "Do you like to play sports", bot: "Sports are fun and great for fitness. Do you enjoy playing sports?" },
        { user: "What's your favorite type of chocolate", bot: "Dark chocolate is rich and flavorful. What's your favorite type of chocolate?" },
        { user: "Do you like to collect things", bot: "Collecting can be a fun and rewarding hobby. Do you like to collect anything?" },
        { user: "What's your favorite type of weather", bot: "Many people love sunny weather for its warmth. What's your favorite type of weather?" },
        { user: "Do you like to travel", bot: "Traveling is a wonderful way to explore new places. Do you like to travel?" },
        { user: "What's your favorite city", bot: "Paris is a favorite for its beauty and culture. What's your favorite city?" },
        { user: "Do you like to read fiction", bot: "Fiction is great for escaping into different worlds. Do you like to read fiction?" },
        { user: "What's your favorite book series", bot: "Harry Potter is beloved by many. What's your favorite book series?" },
        { user: "Do you like to read non-fiction", bot: "Non-fiction is excellent for learning new things. Do you like to read non-fiction?" },
        { user: "What's your favorite TV series", bot: "Game of Thrones is popular for its epic story. What's your favorite TV series?" },
        { user: "Do you like to listen to podcasts", bot: "Podcasts are great for learning and entertainment. Do you like to listen to podcasts?" },
        { user: "What's your favorite podcast", bot: "Many people enjoy 'Serial' for its gripping story. What's your favorite podcast?" },
        { user: "Do you like to watch documentaries", bot: "Documentaries are informative and fascinating. Do you like to watch documentaries?" },
        { user: "What's your favorite documentary", bot: "Planet Earth is loved for its stunning visuals. What's your favorite documentary?" },
        { user: "Do you like to go to concerts", bot: "Concerts are exhilarating and fun. Do you enjoy going to concerts?" },
        { user: "What's your favorite type of concert", bot: "Rock concerts are known for their high energy. What's your favorite type of concert?" },
        { user: "Do you like to go to museums", bot: "Museums are educational and interesting. Do you like visiting museums?" },
        { user: "What's your favorite museum", bot: "The Louvre is famous for its vast collection. What's your favorite museum?" },
        { user: "Do you like to visit parks", bot: "Parks are great for relaxation and recreation. Do you like visiting parks?" },
        { user: "What's your favorite park", bot: "Central Park is loved for its beauty and size. What's your favorite park?" },
        { user: "Do you like to go to the beach", bot: "The beach is perfect for relaxation and fun. Do you enjoy going to the beach?" },
        { user: "What's your favorite beach", bot: "Bondi Beach is famous for its beauty. What's your favorite beach?" },
        { user: "Do you like to go to the mountains", bot: "The mountains are peaceful and stunning. Do you enjoy going to the mountains?" },
        { user: "What's your favorite mountain", bot: "Mount Everest is renowned for its height. What's your favorite mountain?" },
        { user: "Do you like to explore cities", bot: "Exploring cities is exciting and full of surprises. Do you like exploring cities?" },
        { user: "What's your favorite city to explore", bot: "New York City is famous for its endless activities. What's your favorite city to explore?" },
        { user: "Do you like to go to the countryside", bot: "The countryside is calm and refreshing. Do you enjoy visiting the countryside?" },
        { user: "What's your favorite countryside activity", bot: "Hiking is a favorite for its connection with nature. What's your favorite countryside activity?" },
        { user: "Do you like to play board games", bot: "Board games are fun and great for socializing. Do you enjoy playing board games?" },
        { user: "What's your favorite board game", bot: "Monopoly is a classic favorite. What's your favorite board game?" },
        { user: "Do you like to go to the gym", bot: "The gym is great for fitness and health. Do you like going to the gym?" },
        { user: "What's your favorite gym exercise", bot: "Many people enjoy lifting weights. What's your favorite gym exercise?" },
        { user: "Do you like to practice mindfulness", bot: "Mindfulness is excellent for mental clarity. Do you practice mindfulness?" },
        { user: "What's your favorite mindfulness technique", bot: "Deep breathing is simple and effective. What's your favorite mindfulness technique?" },
        { user: "Do you like to do crafts", bot: "Crafts are a fun way to be creative. Do you enjoy doing crafts?" },
        { user: "What's your favorite craft project", bot: "Making homemade candles is popular. What's your favorite craft project?" },
        { user: "Do you like to learn new skills", bot: "Learning new skills is rewarding and fun. Do you enjoy learning new skills?" },
        { user: "What's your favorite skill to learn", bot: "Many people enjoy learning new languages. What's your favorite skill to learn?" },
        { user: "Do you like to play trivia games", bot: "Trivia games are fun and educational. Do you enjoy playing trivia games?" },
        { user: "What's your favorite trivia topic", bot: "History is a favorite trivia topic for many. What's your favorite trivia topic?" },
        { user: "Do you like to participate in challenges", bot: "Challenges are a great way to push yourself. Do you enjoy participating in challenges?" },
        { user: "What's your favorite type of challenge", bot: "Fitness challenges are popular and motivating. What's your favorite type of challenge?" },
        { user: "Do you like to play with toys", bot: "Toys are fun and bring joy. Do you enjoy playing with toys?" },
        { user: "What's your favorite type of toy", bot: "LEGO sets are loved for their creativity. What's your favorite type of toy?" },
        { user: "Do you like to play with gadgets", bot: "Gadgets are fascinating and useful. Do you enjoy playing with gadgets?" },
        { user: "What's your favorite gadget", bot: "Smartphones are incredibly versatile. What's your favorite gadget?" },
        { user: "Do you like to build things", bot: "Building things is creative and satisfying. Do you enjoy building things?" },
        { user: "What's your favorite thing to build", bot: "Many people love building model kits. What's your favorite thing to build?" },
        { user: "Do you like to cook", bot: "Cooking is fun and rewarding. Do you enjoy cooking?" },
        { user: "What's your favorite dish to cook", bot: "Spaghetti Bolognese is a classic favorite. What's your favorite dish to cook?" },
        { user: "Do you like to bake", bot: "Baking is a delightful and rewarding activity. Do you enjoy baking?" },
        { user: "What's your favorite treat to bake", bot: "Chocolate chip cookies are a timeless favorite. What's your favorite treat to bake?" },
        { user: "Do you like to grill", bot: "Grilling is fun and delicious. Do you enjoy grilling?" },
        { user: "What's your favorite food to grill", bot: "Many people love grilling burgers. What's your favorite food to grill?" },
        { user: "Do you like to host parties", bot: "Hosting parties is a fun way to gather with friends. Do you enjoy hosting parties?" },
        { user: "What's your favorite type of party", bot: "Many people enjoy dinner parties for their good food and conversation. What's your favorite type of party?" },
        { user: "Do you like to attend events", bot: "Events are exciting and full of energy. Do you enjoy attending events?" },
        { user: "What's your favorite type of event", bot: "Music festivals are popular for their lively atmosphere. What's your favorite type of event?" },
        { user: "Do you like to participate in workshops", bot: "Workshops are great for learning and practicing new skills. Do you enjoy participating in workshops?" },
        { user: "What's your favorite type of workshop", bot: "Many people love cooking workshops. What's your favorite type of workshop?" },
        { user: "Do you like to attend lectures", bot: "Lectures are informative and engaging. Do you enjoy attending lectures?" },
        { user: "What's your favorite lecture topic", bot: "Many people enjoy lectures on science. What's your favorite lecture topic?" },
        { user: "Do you like to visit gardens", bot: "Gardens are beautiful and peaceful. Do you enjoy visiting gardens?" },
        { user: "What's your favorite garden", bot: "Kew Gardens is renowned for its variety. What's your favorite garden?" },
        { user: "Do you like to go on road trips", bot: "Road trips are adventurous and fun. Do you enjoy going on road trips?" },
        { user: "What's your favorite road trip destination", bot: "Many people love road trips to national parks. What's your favorite road trip destination?" },
        { user: "Do you like to attend plays", bot: "Plays are engaging and entertaining. Do you enjoy attending plays?" },
        { user: "What's your favorite play", bot: "Many people love 'Hamilton' for its music and story. What's your favorite play?" },
        { user: "Do you like to go to the theater", bot: "The theater is a wonderful place for entertainment. Do you enjoy going to the theater?" },
        { user: "What's your favorite theater production", bot: "Many people enjoy 'The Phantom of the Opera'. What's your favorite theater production?" },
        { user: "Do you like to go to amusement parks", bot: "Amusement parks are fun and thrilling. Do you enjoy going to amusement parks?" },
        { user: "What's your favorite amusement park", bot: "Disneyland is loved for its magic and rides. What's your favorite amusement park?" },
        { user: "Do you like to go to water parks", bot: "Water parks are refreshing and fun. Do you enjoy going to water parks?" },
        { user: "What's your favorite water park", bot: "Many people love Water World for its variety. What's your favorite water park?" },
        { user: "Do you like to explore", bot: "Exploring is exciting and full of surprises. Do you like to explore?" },
        { user: "What's your favorite place to explore", bot: "Many people love exploring ancient ruins. What's your favorite place to explore?" },
        { user: "Do you like to relax", bot: "Relaxation is important and enjoyable. Do you like to relax?" },
        { user: "What's your favorite way to relax", bot: "Many people love reading a good book to relax. What's your favorite way to relax?" },
        { user: "Do you like to exercise", bot: "Exercise is great for health and well-being. Do you like to exercise?" },
        { user: "What's your favorite exercise", bot: "Many people enjoy jogging for exercise. What's your favorite way to exercise?" },
        { user: "Do you like to watch sports", bot: "Watching sports is exciting and entertaining. Do you enjoy watching sports?" },
        { user: "What's your favorite sport to watch", bot: "Many people love watching football. What's your favorite sport to watch?" },
        { user: "Do you like to dance", bot: "Dancing is fun and a great way to express yourself. Do you like to dance?" },
        { user: "What's your favorite dance style", bot: "Many people enjoy salsa for its rhythm and energy. What's your favorite dance style?" },
        { user: "Do you like to play music", bot: "Playing music is creative and enjoyable. Do you like to play music?" },
        { user: "What's your favorite instrument to play", bot: "Many people love playing the guitar. What's your favorite instrument to play?" },
        { user: "Do you like to sing", bot: "Singing is fun and uplifting. Do you like to sing?" },
        { user: "What's your favorite song to sing", bot: "Many people enjoy singing 'Bohemian Rhapsody'. What's your favorite song to sing?" },
        { user: "Do you like to go to bars", bot: "Bars are great for socializing. Do you enjoy going to bars?" },
        { user: "What's your favorite bar", bot: "Many people love 'The Dead Rabbit' in New York. What's your favorite bar?" },
        { user: "Do you like to go to clubs", bot: "Clubs are fun for dancing and music. Do you enjoy going to clubs?" },
        { user: "What's your favorite club", bot: "Many people love 'Berghain' in Berlin. What's your favorite club?" },
        { user: "Do you like to play board games", bot: "Board games are fun and social. Do you like to play board games?" },
        { user: "What's your favorite board game", bot: "Many people enjoy playing 'Catan'. What's your favorite board game?" },
        { user: "Do you like to play video games", bot: "Video games are immersive and fun. Do you like to play video games?" },
        { user: "What's your favorite video game", bot: "Many people love playing 'The Legend of Zelda'. What's your favorite video game?" },
        { user: "Do you like to visit aquariums", bot: "Aquariums are fascinating and peaceful. Do you enjoy visiting aquariums?" },
        { user: "What's your favorite aquarium", bot: "Many people love 'Monterey Bay Aquarium'. What's your favorite aquarium?" },
        { user: "Do you like to visit zoos", bot: "Zoos are educational and fun. Do you enjoy visiting zoos?" },
        { user: "What's your favorite zoo", bot: "Many people enjoy 'San Diego Zoo'. What's your favorite zoo?" },
        { user: "Do you like to go to festivals", bot: "Festivals are lively and fun. Do you enjoy going to festivals?" },
        { user: "What's your favorite festival", bot: "Many people love 'Glastonbury Festival'. What's your favorite festival?" },
        { user: "Do you like to watch parades", bot: "Parades are colorful and exciting. Do you enjoy watching parades?" },
        { user: "What's your favorite parade", bot: "Many people enjoy the 'Macy's Thanksgiving Day Parade'. What's your favorite parade?" },
        { user: "Do you like to go on cruises", bot: "Cruises are relaxing and scenic. Do you enjoy going on cruises?" },
        { user: "What's your favorite cruise destination", bot: "Many people love cruising to the Caribbean. What's your favorite cruise destination?" },
        { user: "Do you like to visit historical sites", bot: "Historical sites are fascinating and educational. Do you enjoy visiting historical sites?" },
        { user: "What's your favorite historical site", bot: "Many people love visiting the Colosseum in Rome. What's your favorite historical site?" },
        { user: "Do you like to go on picnics", bot: "Picnics are relaxing and fun. Do you enjoy going on picnics?" },
        { user: "What's your favorite picnic spot", bot: "Many people love picnicking in Central Park. What's your favorite picnic spot?" },
        { user: "Do you like to go on hikes", bot: "Hiking is great for exercise and scenery. Do you enjoy going on hikes?" },
        { user: "What's your favorite hiking trail", bot: "Many people love hiking the Appalachian Trail. What's your favorite hiking trail?" },
        { user: "Do you like to visit markets", bot: "Markets are vibrant and full of interesting finds. Do you enjoy visiting markets?" },
        { user: "What's your favorite market", bot: "Many people love Pike Place Market. What's your favorite market?" },
        { user: "Do you like to go to fairs", bot: "Fairs are fun and full of activities. Do you enjoy going to fairs?" },
        { user: "What's your favorite fair", bot: "Many people love the Texas State Fair. What's your favorite fair?" },
        { user: "Do you like to visit castles", bot: "Castles are historic and majestic. Do you enjoy visiting castles?" },
        { user: "What's your favorite castle", bot: "Many people love visiting Edinburgh Castle. What's your favorite castle?" },
        { user: "Do you like to visit theme parks", bot: "Theme parks are fun and exciting. Do you enjoy visiting theme parks?" },
        { user: "What's your favorite theme park", bot: "Many people love Disneyland. What's your favorite theme park?" },
        { user: "Do you like to play card games", bot: "Card games are fun and strategic. Do you enjoy playing card games?" },
        { user: "What's your favorite card game", bot: "Many people enjoy playing poker. What's your favorite card game?" },
        { user: "Do you like to visit farms", bot: "Farms are peaceful and educational. Do you enjoy visiting farms?" },
        { user: "What's your favorite farm activity", bot: "Many people enjoy picking fresh fruits. What's your favorite farm activity?" },
        { user: "Do you like to watch the sunrise", bot: "Sunrises are beautiful and inspiring. Do you enjoy watching the sunrise?" },
        { user: "What's your favorite sunrise spot", bot: "Many people love watching the sunrise from a beach. What's your favorite sunrise spot?" },
        { user: "Do you like to watch the sunset", bot: "Sunsets are beautiful and calming. Do you enjoy watching the sunset?" },
        { user: "What's your favorite sunset spot", bot: "Many people love watching the sunset from a mountain top. What's your favorite sunset spot?" },
        { user: "Do you like to stargaze", bot: "Stargazing is peaceful and fascinating. Do you enjoy stargazing?" },
        { user: "What's your favorite constellation", bot: "Many people love Orion. What's your favorite constellation?" },
        { user: "Do you like to visit planetariums", bot: "Planetariums are educational and captivating. Do you enjoy visiting planetariums?" },
        { user: "What's your favorite planetarium", bot: "Many people love the Hayden Planetarium. What's your favorite planetarium?" },
        { user: "Do you like to go fishing", bot: "Fishing is relaxing and enjoyable. Do you like to go fishing?" },
        { user: "What's your favorite fishing spot", bot: "Many people love fishing in the Great Lakes. What's your favorite fishing spot?" },
        { user: "Do you like to go hunting", bot: "Hunting is a challenging and exciting activity. Do you like to go hunting?" },
        { user: "What's your favorite hunting location", bot: "Many people love hunting in the Rocky Mountains. What's your favorite hunting location?" },
        { user: "Do you like to go camping", bot: "Camping is fun and refreshing. Do you enjoy going camping?" },
        { user: "What's your favorite camping spot", bot: "Many people love camping in Yosemite National Park. What's your favorite camping spot?" },
        { user: "Do you like to go bird watching", bot: "Bird watching is peaceful and educational. Do you enjoy bird watching?" },
        { user: "What's your favorite bird to watch", bot: "Many people love watching eagles. What's your favorite bird to watch?" },
        { user: "Do you like to visit lighthouses", bot: "Lighthouses are historic and scenic. Do you enjoy visiting lighthouses?" },
        { user: "What's your favorite lighthouse", bot: "Many people love the Portland Head Light. What's your favorite lighthouse?" },
        { user: "Do you like to visit botanical gardens", bot: "Botanical gardens are beautiful and educational. Do you enjoy visiting botanical gardens?" },
        { user: "What's your favorite botanical garden", bot: "Many people love Kew Gardens. What's your favorite botanical garden?" },
        { user: "Do you like to visit arboretums", bot: "Arboretums are peaceful and educational. Do you enjoy visiting arboretums?" },
        { user: "What's your favorite arboretum", bot: "Many people love the Arnold Arboretum. What's your favorite arboretum?" },
        { user: "Do you like to visit nature reserves", bot: "Nature reserves are beautiful and important for conservation. Do you enjoy visiting nature reserves?" },
        { user: "What's your favorite nature reserve", bot: "Many people love the Serengeti. What's your favorite nature reserve?" },
        { user: "Do you like to go on safaris", bot: "Safaris are exciting and educational. Do you enjoy going on safaris?" },
        { user: "What's your favorite safari destination", bot: "Many people love going on safaris in Kenya. What's your favorite safari destination?" },
        { user: "Do you like to go on boat trips", bot: "Boat trips are relaxing and scenic. Do you enjoy going on boat trips?" },
        { user: "What's your favorite boat trip destination", bot: "Many people love taking boat trips to the Greek islands. What's your favorite boat trip destination?" },
        { user: "Do you like to go kayaking", bot: "Kayaking is fun and adventurous. Do you enjoy going kayaking?" },
        { user: "What's your favorite kayaking spot", bot: "Many people love kayaking in the fjords of Norway. What's your favorite kayaking spot?" },
        { user: "Do you like to go paddleboarding", bot: "Paddleboarding is fun and great for exercise. Do you enjoy going paddleboarding?" },
        { user: "What's your favorite paddleboarding spot", bot: "Many people love paddleboarding in Hawaii. What's your favorite paddleboarding spot?" },
        { user: "Do you like to go snorkeling", bot: "Snorkeling is exciting and beautiful. Do you enjoy going snorkeling?" },
        { user: "What's your favorite snorkeling spot", bot: "Many people love snorkeling in the Great Barrier Reef. What's your favorite snorkeling spot?" },
        { user: "Do you like to go scuba diving", bot: "Scuba diving is thrilling and immersive. Do you enjoy going scuba diving?" },
        { user: "What's your favorite scuba diving spot", bot: "Many people love scuba diving in the Maldives. What's your favorite scuba diving spot?" },
        { user: "Do you like to go surfing", bot: "Surfing is exhilarating and fun. Do you enjoy going surfing?" },
        { user: "What's your favorite surfing spot", bot: "Many people love surfing at Pipeline in Hawaii. What's your favorite surfing spot?" },
        { user: "Do you like to go windsurfing", bot: "Windsurfing is thrilling and fun. Do you enjoy going windsurfing?" },
        { user: "What's your favorite windsurfing spot", bot: "Many people love windsurfing in Maui. What's your favorite windsurfing spot?" },
        { user: "Do you like to go kiteboarding", bot: "Kiteboarding is adventurous and fun. Do you enjoy going kiteboarding?" },
        { user: "What's your favorite kiteboarding spot", bot: "Many people love kiteboarding in the Dominican Republic. What's your favorite kiteboarding spot?" },
        { user: "Do you like to go sailing", bot: "Sailing is relaxing and beautiful. Do you enjoy going sailing?" },
        { user: "What's your favorite sailing destination", bot: "Many people love sailing in the Mediterranean. What's your favorite sailing destination?" },
        { user: "Do you like to go swimming", bot: "Swimming is fun and great exercise. Do you enjoy going swimming?" },
        { user: "What's your favorite swimming spot", bot: "Many people love swimming in the Caribbean. What's your favorite swimming spot?" },
        { user: "Do you like to go tubing", bot: "Tubing is fun and relaxing. Do you enjoy going tubing?" },
        { user: "What's your favorite tubing spot", bot: "Many people love tubing on the Guadalupe River. What's your favorite tubing spot?" },
        { user: "Do you like to go white water rafting", bot: "White water rafting is thrilling and fun. Do you enjoy going white water rafting?" },
        { user: "What's your favorite white water rafting spot", bot: "Many people love rafting on the Colorado River. What's your favorite white water rafting spot?" },
        { user: "Do you like to go parasailing", bot: "Parasailing is exciting and scenic. Do you enjoy going parasailing?" },
    ];

        let chatGptApiToken = ""; // Placeholder for ChatGPT API token
        let isTyping = false; // Variable to track if bot is typing
    
        function normalizeInput(input) {
            return input.toLowerCase().replace(/[.,\/#!$%\'^&\*;:{}=\-_`~()]/g, "").trim();
        }
    
        function handleFeedback(messageText) {
            console.log("User liked this response:", messageText);
            // Add your feedback handling logic here (e.g., send to server, local logging)
        }
    
        function createUserMessage(messageText, timestamp) {
            const messageContainer = document.createElement("div");
            messageContainer.classList.add("message", "user-message");
            messageContainer.dataset.timestamp = timestamp;
            messageContainer.innerHTML = `
                <span>${messageText}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;
            return messageContainer;
        }
    
        function createBotMessage(messageText, timestamp) {
            const messageContainer = document.createElement("div");
            messageContainer.classList.add("message", "bot-message");
            messageContainer.dataset.timestamp = timestamp;
    
            // Replace :) with a smile emoji
            messageText = messageText.replace(/:\)/g, "😊");
    
            // Parse other emojis or rich text as needed
            const messageContent = document.createElement("div");
            messageContent.innerHTML = messageText; // Use innerHTML for rich text
    
            messageContainer.appendChild(messageContent);
    
            // Add a feedback button with emojis
            const feedbackButton = document.createElement("button");
            feedbackButton.classList.add("feedback-button");
            feedbackButton.innerHTML = `
                <span class="emoji">❤️</span>
                <span class="emoji">👍</span>
                <span class="emoji">😮</span>
                <span class="emoji">🔥</span>
                <span class="emoji">😂</span>
            `;
            messageContainer.appendChild(feedbackButton);
    
            // Add click event listener for the feedback button
            feedbackButton.addEventListener("click", function () {
                handleFeedback(messageText);
                feedbackButton.classList.add("animate"); // Add animation class
                setTimeout(() => {
                    feedbackButton.classList.remove("animate"); // Remove animation class after delay
                }, 1000); // Adjust delay as needed
            });
    
            return messageContainer;
        }
    
        function saveToLocalStorage(messageText, isUserMessage, timestamp) {
            const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
            chatHistory.push({ message: messageText, isUserMessage, timestamp });
            localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
        }
    
        function loadChatHistory() {
            const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
            chatHistory.forEach(entry => {
                const messageContainer = entry.isUserMessage ? createUserMessage(entry.message, entry.timestamp) : createBotMessage(entry.message, entry.timestamp);
                chatWindow.appendChild(messageContainer);
            });
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    
        window.addEventListener("load", loadChatHistory);
    
        async function botResponse(userInput) {
            const normalizedInput = normalizeInput(userInput);
    
            // Simulate typing indicator
            showTypingIndicator();
            isTyping = true;
    
            for (let i = 0; i < responseDatabase.length; i++) {
                const entry = responseDatabase[i];
                if (normalizeInput(entry.user) === normalizedInput) {
                    // Simulate delay for bot response
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    hideTypingIndicator();
                    isTyping = false;
                    return entry.bot;
                }
            }
    
            // Simulate delay for bot response
            await new Promise(resolve => setTimeout(resolve, 1000));
            hideTypingIndicator();
            isTyping = false;
            return getResponseFromChatGPT(userInput);
        }
    
        async function sendMessage() {
            const messageText = userInput.value.trim();
            if (messageText === "") return;
    
            const timestamp = new Date().toISOString();
            const userMessageElement = createUserMessage(messageText, timestamp);
            chatWindow.appendChild(userMessageElement);
            saveToLocalStorage(messageText, true, timestamp);
    
            try {
                const botMessageText = await botResponse(messageText);
                const botMessageElement = createBotMessage(botMessageText, timestamp);
                chatWindow.appendChild(botMessageElement);
                saveToLocalStorage(botMessageText, false, timestamp);
            } catch (error) {
                console.error("Error while processing bot response:", error);
                const errorMessageElement = createBotMessage("Oops! There was an error processing your request.", timestamp);
                chatWindow.appendChild(errorMessageElement);
            }
    
            chatWindow.scrollTop = chatWindow.scrollHeight;
            userInput.value = "";
        }
    
        sendButton.addEventListener("click", function () {
            sendMessage();
        });
    
        userInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    
        // Emoji Selection
        const emojis = document.querySelectorAll('.emoji');
        emojis.forEach(emoji => {
            emoji.addEventListener('click', function () {
                this.classList.toggle('selected');
            });
        });
    
        // Voice Input Button
        voiceInputButton.addEventListener("click", function () {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
    
            recognition.onstart = function () {
                console.log('Voice recognition started');
                voiceInputButton.classList.add('listening');
            };
    
            recognition.onend = function () {
                console.log('Voice recognition ended');
                voiceInputButton.classList.remove('listening');
            };
    
            recognition.onresult = function (event) {
                const transcript = event.results[0][0].transcript;
                console.log('Voice input:', transcript);
                userInput.value = transcript;
                sendMessage(); // Automatically send message after voice input
            };
    
            recognition.start();
        });
    
        // Clear History Button
        clearHistoryButton.addEventListener("click", function () {
            localStorage.removeItem("chatHistory");
            chatWindow.innerHTML = "";
        });
    
        // Theme Toggle Button
        themeToggleButton.addEventListener("click", function () {
            document.body.classList.toggle("light-theme");
            chatWindow.classList.toggle("light-theme");
            // Toggle other elements as needed
        });
    
        // Function to show typing indicator
        function showTypingIndicator() {
            typingIndicator.style.display = "block";
        }
    
        // Function to hide typing indicator
        function hideTypingIndicator() {
            typingIndicator.style.display = "none";
        }
    
        // Function to simulate ChatGPT API call (Placeholder)
        async function getResponseFromChatGPT(userInput) {
            if (chatGptApiToken) {
                try {
                    // Replace with actual API call implementation
                    // Example using setTimeout as a placeholder
                    return new Promise(resolve => {
                        setTimeout(() => {
                            resolve("This is a response from ChatGPT API.");
                        }, 1000);
                    });
                } catch (error) {
                    console.error("Error fetching response from ChatGPT API:", error);
                    return "Sorry, there was an error. Please try again later.";
                }
            } else {
                return "I'm sorry, I can't respond to that right now.";
            }
        };
    
        // Message editing and deletion functionality
        chatWindow.addEventListener("click", function (event) {
            const messageElement = event.target.closest(".message");
            if (!messageElement) return;
    
            const editButton = messageElement.querySelector(".edit-button");
            const deleteButton = messageElement.querySelector(".delete-button");
    
            if (editButton && event.target === editButton) {
                const messageTextElement = messageElement.querySelector("span");
                const currentMessageText = messageTextElement.textContent.trim();
                const newText = prompt("Edit your message:", currentMessageText);
                if (newText !== null && newText !== currentMessageText) {
                    messageTextElement.textContent = newText;
                    const timestamp = messageElement.dataset.timestamp;
                    updateLocalStorage(newText, true, timestamp);
                }}
