// Soonkwon Hwang G01281350
// SWE 432
// HW Assignment 1: Javascript
// API (500 quotes) from Public API (https://github.com/lukePeavey/quotable)

const dataset = [
  {
    _id: "juG0aJTnYxmf",
    content:
      "The Superior Man is aware of Righteousness, the inferior man is aware of advantage.",
    author: "Confucius",
    tags: ["famous-quotes"], 
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 83,
  },
  {
    _id: "FMZiiLHfCOc",
    content:
      "America's freedom of religion, and freedom from religion, offers every wisdom tradition an opportunity to address our soul-deep needs: Christianity, Judaism, Islam, Buddhism, Hinduism, secular humanism, agnosticism and atheism among others.",
    author: "Parker Palmer",
    tags: ["wisdom"],
    authorId: "XPDojD6THK",
    authorSlug: "parker-palmer",
    length: 240,
  },
  {
    _id: "CXJ3rBlnfFa2",
    content: "Myths which are believed in tend to become true.",
    author: "George Orwell",
    tags: ["famous-quotes"],
    authorId: "YyZuhLs2-ki6",
    authorSlug: "george-orwell",
    length: 48,
  },
  {
    _id: "ihnLNFx2ZolZ",
    content: "In all chaos there is a cosmos, in all disorder a secret order.",
    author: "Carl Jung",
    tags: ["famous-quotes"],
    authorId: "-LYBJJujV7RL",
    authorSlug: "carl-jung",
    length: 63,
  },
  {
    _id: "HFT6qcdMVVt",
    content:
      "Be courteous to all, but intimate with few, and let those few be well tried before you give them your confidence.",
    author: "George Washington",
    tags: ["friendship"],
    authorId: "e2dM0CnWTjCD",
    authorSlug: "george-washington",
    length: 113,
  },
  {
    _id: "r6gpkIboJCzH",
    content:
      "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience.",
    author: "Robert Fulghum",
    tags: ["famous-quotes"],
    authorId: "OMH4P98yJ7YG",
    authorSlug: "robert-fulghum",
    length: 135,
  },
  {
    _id: "1BXjOAdiKUXW",
    content:
      "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
    author: "Eckhart Tolle",
    tags: ["famous-quotes"],
    authorId: "I6wUbDqsmByX",
    authorSlug: "eckhart-tolle",
    length: 105,
  },
  {
    _id: "Z5HhvrGNn3_Y",
    content:
      "There is nothing happens to any person but what was in his power to go through with.",
    author: "Marcus Aurelius",
    tags: ["famous-quotes"],
    authorId: "zW_A5fM6XU-v",
    authorSlug: "marcus-aurelius",
    length: 84,
  },
  {
    _id: "WDGgxBqNWco9",
    content:
      "The smallest act of kindness is worth more than the grandest intention.",
    author: "Oscar Wilde",
    tags: ["famous-quotes"],
    authorId: "yw5O7wULaKfx",
    authorSlug: "oscar-wilde",
    length: 71,
  },
  {
    _id: "2hNPcjVsMTb",
    content: "Every problem has a gift for you in its hands.",
    author: "Richard Bach",
    tags: ["famous-quotes"],
    authorId: "t9lNqDH0TmYo",
    authorSlug: "richard-bach",
    length: 46,
  },
  {
    _id: "o8Xc7pO8Y1aD",
    content:
      "The greatest minds are capable of the greatest vices as well as of the greatest virtues.",
    author: "René Descartes",
    tags: ["famous-quotes"],
    authorId: "7oQmRTe0VZhD",
    authorSlug: "rene-descartes",
    length: 88,
  },
  {
    _id: "T3WzgRWp0RNY",
    content: "The world makes way for the man who knows where he is going.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 60,
  },
  {
    _id: "J2QOuZPIiG",
    content:
      "You are a product of your environment. So choose the environment that will best develop you toward your objective. Analyze your life in terms of its environment. Are the things around you helping you toward success - or are they holding you back?",
    author: "W. Clement Stone",
    tags: ["wisdom"],
    authorId: "esj6cyXo7w3_",
    authorSlug: "w-clement-stone",
    length: 246,
  },
  {
    _id: "ALcsEfDR7FL",
    content: "The cautious seldom err.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 24,
  },
  {
    _id: "q3SfzGZd2iGb",
    content:
      "The most complicated achievements of thought are possible without the assistance of consciousness.",
    author: "Sigmund Freud",
    tags: ["famous-quotes"],
    authorId: "S2-JbY3NzItd",
    authorSlug: "sigmund-freud",
    length: 98,
  },
  {
    _id: "yr4loYMOP15w",
    content:
      "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
    author: "John F. Kennedy",
    tags: ["famous-quotes"],
    authorId: "hVmL2YCoGCRZ",
    authorSlug: "john-f-kennedy",
    length: 123,
  },
  {
    _id: "SjSXV2RqMnq3",
    content:
      "The greatest way to live with honor in this world is to be what we pretend to be.",
    author: "Socrates",
    tags: ["famous-quotes"],
    authorId: "C9DlPOiO6CUk",
    authorSlug: "socrates",
    length: 81,
  },
  {
    _id: "O_jlFdjUtHPT",
    content:
      "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you.",
    author: "Richard Bach",
    tags: ["famous-quotes"],
    authorId: "t9lNqDH0TmYo",
    authorSlug: "richard-bach",
    length: 132,
  },
  {
    _id: "tE2DJstE_-",
    content: "Wisdom begins at the end.",
    author: "Daniel Webster",
    tags: ["wisdom"],
    authorId: "6MQyJsAQJ0",
    authorSlug: "daniel-webster",
    length: 25,
  },
  {
    _id: "6Frokv7EPoui",
    content:
      "Ignorant men don't know what good they hold in their hands until they've flung it away.",
    author: "Sophocles",
    tags: ["famous-quotes"],
    authorId: "bBwlN7LI2Jtu",
    authorSlug: "sophocles",
    length: 87,
  },
  {
    _id: "LlHX1-JaSX4v",
    content:
      "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 116,
  },
  {
    _id: "dZewn83VJ8",
    content:
      "Science gives us knowledge, but only philosophy can give us wisdom.",
    author: "Will Durant",
    tags: ["wisdom"],
    authorId: "ePSTACfg6LJF",
    authorSlug: "will-durant",
    length: 67,
  },
  {
    _id: "HQNnn2x2Vc",
    content:
      "A passion for politics stems usually from an insatiable need, either for power, or for friendship and adulation, or a combination of both.",
    author: "Fawn M. Brodie",
    tags: ["friendship", "politics"],
    authorId: "Miy-SXplY_",
    authorSlug: "fawn-m-brodie",
    length: 138,
  },
  {
    _id: "yE-5JJkxPMwS",
    content:
      "Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be.",
    author: "Thomas à Kempis",
    tags: ["famous-quotes"],
    authorId: "dlhcmYIGySaN",
    authorSlug: "thomas-a-kempis",
    length: 114,
  },
  {
    _id: "K_JAFGFr7CQ",
    content: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    tags: ["famous-quotes"],
    authorId: "1X7NWb1oyd21",
    authorSlug: "eleanor-roosevelt",
    length: 55,
  },
  {
    _id: "CFy490n4lo8g",
    content:
      "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.",
    author: "Margaret Cousins",
    tags: ["famous-quotes"],
    authorId: "kGus0J4NngTj",
    authorSlug: "margaret-cousins",
    length: 112,
  },
  {
    _id: "puOWR0I5qnC",
    content: "Much wisdom often goes with fewest words.",
    author: "Sophocles",
    tags: ["wisdom"],
    authorId: "bBwlN7LI2Jtu",
    authorSlug: "sophocles",
    length: 41,
  },
  {
    _id: "qdu_n6bzzKdo",
    content: "Joy is the best makeup.",
    author: "Anne Lamott",
    tags: ["famous-quotes"],
    authorId: "U9sym_5RKQun",
    authorSlug: "anne-lamott",
    length: 23,
  },
  {
    _id: "Me8_vxzeboS",
    content: "There never was a good knife made of bad steel.",
    author: "Benjamin Franklin",
    tags: ["famous-quotes"],
    authorId: "xkvcrqREjoOB",
    authorSlug: "benjamin-franklin",
    length: 47,
  },
  {
    _id: "x16CqiTuVRw2",
    content:
      "I love my past. I love my present. Im not ashamed of what Ive had, and Im not sad because I have it no longer.",
    author: "Colette",
    tags: ["famous-quotes"],
    authorId: "Yu8OzWEaUynL",
    authorSlug: "colette",
    length: 110,
  },
  {
    _id: "z-6ZEcSbP",
    content:
      "There is a difference between happiness and wisdom: he that thinks himself the happiest man is really so; but he that thinks himself the wisest is generally the greatest fool.",
    author: "Francis Bacon",
    tags: ["wisdom"],
    authorId: "zWIvsqe0NWrg",
    authorSlug: "francis-bacon",
    length: 175,
  },
  {
    _id: "cItDIql9UDZQ",
    content:
      "To free us from the expectations of others, to give us back to ourselves... there lies the great, singular power of self-respect.",
    author: "Joan Didion",
    tags: ["famous-quotes"],
    authorId: "igzALEEh5F3J",
    authorSlug: "joan-didion",
    length: 129,
  },
  {
    _id: "Ig8FLVp7MUGN",
    content:
      "The power of intuitive understanding will protect you from harm until the end of your days.",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 91,
  },
  {
    _id: "nm0-EMpYdg",
    content:
      "Never explain - your friends do not need it and your enemies will not believe you anyway.",
    author: "Elbert Hubbard",
    tags: ["friendship"],
    authorId: "CBoxna3kOgDk",
    authorSlug: "elbert-hubbard",
    length: 89,
  },
  {
    _id: "cfZn_tJRV_",
    content: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
    tags: ["wisdom"],
    authorId: "y1EtofIFCLDG",
    authorSlug: "jim-rohn",
    length: 58,
  },
  {
    _id: "BGwOo6FZq3tH",
    content:
      "It is not only for what we do that we are held responsible, but also for what we do not do.",
    author: "Molière",
    tags: ["famous-quotes"],
    authorId: "cnfO1057rjLp",
    authorSlug: "moliere",
    length: 91,
  },
  {
    _id: "tSMhyFCDwuQ5",
    content:
      "All difficult things have their origin in that which is easy, and great things in that which is small.",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 102,
  },
  {
    _id: "tfo24zWoAJ",
    content:
      "It requires wisdom to understand wisdom: the music is nothing if the audience is deaf.",
    author: "Walter Lippmann",
    tags: ["wisdom"],
    authorId: "62LoYlpnLBnT",
    authorSlug: "walter-lippmann",
    length: 86,
  },
  {
    _id: "cJH-_m1_f0Um",
    content:
      "So is cheerfulness, or a good temper, the more it is spent, the more remains.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 77,
  },
  {
    _id: "1YXmyT1yhWU",
    content: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock",
    tags: ["famous-quotes"],
    authorId: "jolipv2qzign",
    authorSlug: "benjamin-spock",
    length: 52,
  },
  {
    _id: "Tb-u26v47VO2",
    content: "Never promise more than you can perform.",
    author: "Publilius Syrus",
    tags: ["famous-quotes"],
    authorId: "uvj7ffI-Yu4z",
    authorSlug: "publilius-syrus",
    length: 40,
  },
  {
    _id: "9rSuCtK9CCZk",
    content: "Formula for success: under promise and over deliver.",
    author: "Tom Peters",
    tags: ["famous-quotes"],
    authorId: "t77znI1gAwCN",
    authorSlug: "tom-peters",
    length: 52,
  },
  {
    _id: "8ZIDZ3CxrJUg",
    content:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    tags: ["famous-quotes"],
    authorId: "ejqEsEP8JKVz",
    authorSlug: "franklin-d-roosevelt",
    length: 74,
  },
  {
    _id: "zbvj3SIQud",
    content:
      "I think people who are creative are the luckiest people on earth. I know that there are no shortcuts, but you must keep your faith in something Greater than You, and keep doing what you love. Do what you love, and you will find the way to get it out to the world.",
    author: "Judy Collins",
    tags: ["inspirational"],
    authorId: "PZLuQR2YR",
    authorSlug: "judy-collins",
    length: 263,
  },
  {
    _id: "KBk2VabfrRne",
    content:
      "The possibilities are numerous once we decide to act and not react.",
    author: "George Bernard Shaw",
    tags: ["famous-quotes"],
    authorId: "zKfoVjq84t9O",
    authorSlug: "george-bernard-shaw",
    length: 67,
  },
  {
    _id: "EGX58vRmwZac",
    content:
      "It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all.",
    author: "Edward de Bono",
    tags: ["famous-quotes"],
    authorId: "Q8iYMcQRfSaG",
    authorSlug: "edward-de-bono",
    length: 114,
  },
  {
    _id: "Chvu_626SS",
    content: "The most I can do for my friend is simply be his friend.",
    author: "Henry David Thoreau",
    tags: ["friendship"],
    authorId: "NrthgQlym1Ji",
    authorSlug: "henry-david-thoreau",
    length: 56,
  },
  {
    _id: "gWSsNulTG-B",
    content:
      "Every one in the world ought to do the things for which he is specially adapted. It is the part of wisdom to recognize what each one of us is best fitted for, and it is the part of education to perfect and utilize such predispositions. Because education can direct and aid nature but can never transform her.",
    author: "Maria Montessori",
    tags: ["wisdom"],
    authorId: "LLK3WHQr-n",
    authorSlug: "maria-montessori",
    length: 308,
  },
  {
    _id: "4eekGH2qL80L",
    content:
      "He who lives in harmony with himself lives in harmony with the world.",
    author: "Marcus Aurelius",
    tags: ["famous-quotes"],
    authorId: "zW_A5fM6XU-v",
    authorSlug: "marcus-aurelius",
    length: 69,
  },
  {
    _id: "q8nzpiYM7R5W",
    content:
      "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.",
    author: "Thomas Edison",
    tags: ["famous-quotes"],
    authorId: "PC4gkJPlknC3",
    authorSlug: "thomas-edison",
    length: 139,
  },
  {
    _id: "mnFoWZfga9OZ",
    content: "Go for it now. The future is promised to no one.",
    author: "Wayne Dyer",
    tags: ["famous-quotes"],
    authorId: "CLxflG5QMMjg",
    authorSlug: "wayne-dyer",
    length: 48,
  },
  {
    _id: "oWZdsMNhOx",
    content:
      "To wear your heart on your sleeve isn't a very good plan; you should wear it inside, where it functions best.",
    author: "Margaret Thatcher",
    tags: ["wisdom"],
    authorId: "WVe0z8ZowG",
    authorSlug: "margaret-thatcher",
    length: 109,
  },
  {
    _id: "eobAW2Ou0",
    content: "You win the victory when you yield to friends.",
    author: "Sophocles",
    tags: ["friendship"],
    authorId: "bBwlN7LI2Jtu",
    authorSlug: "sophocles",
    length: 46,
  },
  {
    _id: "3x87VqS_qvus",
    content:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.",
    author: "Tryon Edwards",
    tags: ["famous-quotes"],
    authorId: "1MrKaB-moWNI",
    authorSlug: "tryon-edwards",
    length: 120,
  },
  {
    _id: "xzOfgffA_i4K",
    content: "Not what we have but what we enjoy constitutes our abundance.",
    author: "Jean Antoine Petit-Senn",
    tags: ["famous-quotes"],
    authorId: "yN1jsKxqikaP",
    authorSlug: "jean-antoine-petit-senn",
    length: 61,
  },
  {
    _id: "47RkLdME26",
    content:
      "Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity.",
    author: "George S. Patton",
    tags: ["wisdom"],
    authorId: "fdSvvuZORmh4",
    authorSlug: "george-s-patton",
    length: 105,
  },
  {
    _id: "rypL5kmdIg8",
    content: "A really great talent finds its happiness in execution.",
    author: "Johann Wolfgang von Goethe",
    tags: ["famous-quotes", "happiness"],
    authorId: "aW1ZR-8LuS28",
    authorSlug: "johann-wolfgang-von-goethe",
    length: 55,
  },
  {
    _id: "gfTHZTAshWP",
    content: "Wisdom comes alone through suffering.",
    author: "Aeschylus",
    tags: ["wisdom"],
    authorId: "ossJxB6-1",
    authorSlug: "aeschylus",
    length: 37,
  },
  {
    _id: "HxaMW05ghs7P",
    content:
      "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
    author: "Mother Teresa",
    tags: ["famous-quotes"],
    authorId: "y7OXxqCaXKVa",
    authorSlug: "mother-teresa",
    length: 99,
  },
  {
    _id: "NrhUkykn4F",
    content: "Marriage: A friendship recognized by the police.",
    author: "Robert Louis Stevenson",
    tags: ["friendship"],
    authorId: "qKwGWW8zDYtf",
    authorSlug: "robert-louis-stevenson",
    length: 48,
  },
  {
    _id: "OHNMF1vCnPFE",
    content:
      "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?",
    author: "Rabbi Hillel",
    tags: ["famous-quotes"],
    authorId: "cII2_MfYV9sI",
    authorSlug: "rabbi-hillel",
    length: 100,
  },
  {
    _id: "ncgMsMKJiBiN",
    content: "If you aren't going all the way, why go at all?",
    author: "Joe Namath",
    tags: ["famous-quotes", "inspirational"],
    authorId: "qHtBDmfzcWY1",
    authorSlug: "joe-namath",
    length: 47,
  },
  {
    _id: "em8Skf5_TYmL",
    content:
      "To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.",
    author: "Theodore H. White",
    tags: ["famous-quotes"],
    authorId: "K_3C2-eM0XG3",
    authorSlug: "theodore-h-white",
    length: 155,
  },
  {
    _id: "_XB2MKPzW7dA",
    content:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    tags: ["famous-quotes", "success", "happiness"],
    authorId: "ANT0MUtjmG6O",
    authorSlug: "albert-schweitzer",
    length: 125,
  },
  {
    _id: "cOGCuuIf9q_V",
    content:
      "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead",
    tags: ["famous-quotes"],
    authorId: "N_2wC_loMyb6",
    authorSlug: "margaret-mead",
    length: 72,
  },
  {
    _id: "F3KNJ0FPy",
    content:
      "If you have the guts to keep making mistakes, your wisdom and intelligence leap forward with huge momentum.",
    author: "Holly Near",
    tags: ["wisdom"],
    authorId: "aRQvvTVi6J",
    authorSlug: "holly-near",
    length: 107,
  },
  {
    _id: "4zLW-um1544g",
    content:
      "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
    author: "David Rockefeller",
    tags: ["famous-quotes"],
    authorId: "b8CEwzZeccbO",
    authorSlug: "david-rockefeller",
    length: 174,
  },
  {
    _id: "RQP0o_Ze99D",
    content: "No man was ever wise by chance.",
    author: "Seneca the Younger",
    tags: ["famous-quotes", "wisdom"],
    authorId: "TyeFCuRgEQjD",
    authorSlug: "seneca-the-younger",
    length: 31,
  },
  {
    _id: "oKk8MCHpwgsK",
    content:
      "Nothing ever goes away until it has taught us what we need to know.",
    author: "Pema Chödrön",
    tags: ["famous-quotes"],
    authorId: "tN_VI2ruKHe1",
    authorSlug: "pema-chodron",
    length: 67,
  },
  {
    _id: "44zDEFUKvm",
    content:
      "The more man meditates upon good thoughts, the better will be his world and the world at large.",
    author: "Confucius",
    tags: ["inspirational"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 95,
  },
  {
    _id: "xH7XN__m5y",
    content: "We can only learn to love by loving.",
    author: "Iris Murdoch",
    tags: ["famous-quotes"],
    authorId: "v2Jk1rHcsGne",
    authorSlug: "iris-murdoch",
    length: 36,
  },
  {
    _id: "22bmCfi_RKD9",
    content:
      "The only thing to do with good advice is to pass it on. It is never of any use to oneself.",
    author: "Oscar Wilde",
    tags: ["famous-quotes"],
    authorId: "yw5O7wULaKfx",
    authorSlug: "oscar-wilde",
    length: 90,
  },
  {
    _id: "Hgj3O0h_R0",
    content:
      "Our shared values define us more than our differences. And acknowledging those shared values can see us through our challenges today if we have the wisdom to trust in them again.",
    author: "John McCain",
    tags: ["wisdom"],
    authorId: "zZ325SZnbU",
    authorSlug: "john-mc-cain",
    length: 178,
  },
  {
    _id: "kbd0ItzHwGdq",
    content:
      "If you change the way you look at things, the things you look at change.",
    author: "Wayne Dyer",
    tags: ["famous-quotes"],
    authorId: "CLxflG5QMMjg",
    authorSlug: "wayne-dyer",
    length: 72,
  },
  {
    _id: "77ZqNwl8aoR4",
    content:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought.",
    author: "Laurence J. Peter",
    tags: ["famous-quotes"],
    authorId: "YQGk6ZEcJXwb",
    authorSlug: "laurence-j-peter",
    length: 102,
  },
  {
    _id: "lZ8sFKiGiC",
    content:
      "If you don't know where you are going, any road will get you there.",
    author: "Lewis Carroll",
    tags: ["wisdom"],
    authorId: "CAjYjAa7_k",
    authorSlug: "lewis-carroll",
    length: 67,
  },
  {
    _id: "dEyIaoXFto_A",
    content:
      "Happiness is a perfume you cannot pour on others without getting a few drops on yourself.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 89,
  },
  {
    _id: "7I1NygyqFe",
    content: "Wisdom is found only in truth.",
    author: "Johann Wolfgang von Goethe",
    tags: ["wisdom"],
    authorId: "aW1ZR-8LuS28",
    authorSlug: "johann-wolfgang-von-goethe",
    length: 30,
  },
  {
    _id: "PYnVkG4UQGH7",
    content:
      "There is nothing on this earth more to be prized than true friendship.",
    author: "Thomas Aquinas",
    tags: ["famous-quotes", "friendship"],
    authorId: "aqllap-WMqA7",
    authorSlug: "thomas-aquinas",
    length: 70,
  },
  {
    _id: "RvqpnaFvABIY",
    content:
      "To get the full value of joy you must have someone to divide it with.",
    author: "Mark Twain",
    tags: ["famous-quotes"],
    authorId: "zbADvkP0r05L",
    authorSlug: "mark-twain",
    length: 69,
  },
  {
    _id: "aNE_rvppMD",
    content:
      "The art of storytelling is reaching its end because the epic side of truth, wisdom, is dying out.",
    author: "Walter Benjamin",
    tags: ["wisdom"],
    authorId: "zI76TcGmOQfn",
    authorSlug: "walter-benjamin",
    length: 97,
  },
  {
    _id: "ITSWNEMYeJ2",
    content: "Our distrust is very expensive.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 31,
  },
  {
    _id: "2wYjTZiTUSgQ",
    content:
      "The things that one most wants to do are the things that are probably most worth doing.",
    author: "Winifred Holtby",
    tags: ["famous-quotes"],
    authorId: "yw0APRMe6ccU",
    authorSlug: "winifred-holtby",
    length: 87,
  },
  {
    _id: "EgCOqrOa1",
    content:
      "Learning is the beginning of wealth. Learning is the beginning of health. Learning is the beginning of spirituality. Searching and learning is where the miracle process all begins.",
    author: "Jim Rohn",
    tags: ["inspirational"],
    authorId: "y1EtofIFCLDG",
    authorSlug: "jim-rohn",
    length: 180,
  },
  {
    _id: "e_gTr6YjsaRE",
    content:
      "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus",
    tags: ["famous-quotes"],
    authorId: "HZHaUuiyIJPp",
    authorSlug: "epictetus",
    length: 73,
  },
  {
    _id: "xiz-AuLNow5",
    content: "When you doubt your power, you give power to your doubt.",
    author: "Honoré de Balzac",
    tags: ["famous-quotes"],
    authorId: "jcH4GH-fD_Lo",
    authorSlug: "honore-de-balzac",
    length: 56,
  },
  {
    _id: "0Fu_lJzNXJj1",
    content:
      "It is not so important to know everything as to appreciate what we learn.",
    author: "Hannah More",
    tags: ["famous-quotes"],
    authorId: "xCBqa2UdrCeh",
    authorSlug: "hannah-more",
    length: 73,
  },
  {
    _id: "BPH3iUjq75e",
    content: "Keep yourself to the sunshine and you cannot see the shadow.",
    author: "Helen Keller",
    tags: ["famous-quotes"],
    authorId: "pYjZMId1ilhK",
    authorSlug: "helen-keller",
    length: 60,
  },
  {
    _id: "UGTlczrORBij",
    content:
      "Nobody made a greater mistake than he who did nothing because he could do only a little.",
    author: "Edmund Burke",
    tags: ["famous-quotes"],
    authorId: "obe8upiDrPyc",
    authorSlug: "edmund-burke",
    length: 88,
  },
  {
    _id: "__MSA1A1By9u",
    content:
      "The foolish man seeks happiness in the distance, the wise grows it under his feet.",
    author: "James Oppenheim",
    tags: ["famous-quotes"],
    authorId: "pY4cjNm7ogoc",
    authorSlug: "james-oppenheim",
    length: 82,
  },
  {
    _id: "1fFK-Xgvy5",
    content:
      "There is no friendship, no love, like that of the parent for the child.",
    author: "Henry Ward Beecher",
    tags: ["friendship"],
    authorId: "7ARdGK2SnqLv",
    authorSlug: "henry-ward-beecher",
    length: 71,
  },
  {
    _id: "999oXJVcS_I_",
    content: "Begin, be bold, and venture to be wise.",
    author: "Horace",
    tags: ["famous-quotes"],
    authorId: "CzaPXGzUZyyQ",
    authorSlug: "horace",
    length: 39,
  },
  {
    _id: "h1Eu15cySGn7",
    content:
      "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.",
    author: "François de La Rochefoucauld",
    tags: ["famous-quotes"],
    authorId: "WsdfQEdjyPNN",
    authorSlug: "francois-de-la-rochefoucauld",
    length: 108,
  },
  {
    _id: "Fyet-MEuSrkD",
    content:
      "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
    author: "Mahatma Gandhi",
    tags: ["famous-quotes"],
    authorId: "4J6_dx73YbT5",
    authorSlug: "mahatma-gandhi",
    length: 99,
  },
  {
    _id: "fdSsJN4RCf",
    content: "It is impossible to love and to be wise.",
    author: "Francis Bacon",
    tags: ["wisdom"],
    authorId: "zWIvsqe0NWrg",
    authorSlug: "francis-bacon",
    length: 40,
  },
  {
    _id: "q_cFcKHlt5",
    content:
      "The sincere friends of this world are as ship lights in the stormiest of nights.",
    author: "Giotto",
    tags: ["friendship"],
    authorId: "HzajC1C73d",
    authorSlug: "giotto",
    length: 80,
  },
  {
    _id: "jUzHSANe7yNC",
    content:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    author: "Henry Wadsworth Longfellow",
    tags: ["famous-quotes"],
    authorId: "YhbRPxv708pj",
    authorSlug: "henry-wadsworth-longfellow",
    length: 91,
  },
  {
    _id: "38EIHUXkkhc",
    content:
      "To bring anything into your life, imagine that it's already there.",
    author: "Richard Bach",
    tags: ["famous-quotes"],
    authorId: "t9lNqDH0TmYo",
    authorSlug: "richard-bach",
    length: 66,
  },
  {
    _id: "kS2H14WhWSor",
    content:
      "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 134,
  },
  {
    _id: "NoaRFCJNzT",
    content: "So much technology, so little talent.",
    author: "Vernor Vinge",
    tags: ["technology"],
    authorId: "1BW5mPKRg",
    authorSlug: "vernor-vinge",
    length: 37,
  },
  {
    _id: "3BOQbdqBbzOd",
    content:
      "Do not follow where the path may lead. Go, instead, where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 93,
  },
  {
    _id: "KziYFsZxdD",
    content:
      "True friendship multiplies the good in life and divides its evils. Strive to have friends, for life without friends is like life on a desert island... to find one real friend in a lifetime is good fortune; to keep him is a blessing.",
    author: "Baltasar Gracián",
    tags: ["friendship"],
    authorId: "NOw0qSU2RzF5",
    authorSlug: "baltasar-gracian",
    length: 232,
  },
  {
    _id: "_PqXIxnDlx",
    content: "Mistakes are the usual bridge between inexperience and wisdom.",
    author: "Phyllis Grissim-Theroux",
    tags: ["wisdom"],
    authorId: "LAi5Ya70h-",
    authorSlug: "phyllis-grissim-theroux",
    length: 62,
  },
  {
    _id: "QZoT0w8MRyc_",
    content: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy",
    tags: ["famous-quotes"],
    authorId: "hVmL2YCoGCRZ",
    authorSlug: "john-f-kennedy",
    length: 53,
  },
  {
    _id: "OrbTAJYtKCXr",
    content:
      "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
    author: "M. Scott Peck",
    tags: ["famous-quotes"],
    authorId: "ki-YWDZ-hlDZ",
    authorSlug: "m-scott-peck",
    length: 110,
  },
  {
    _id: "mi54WW7d_b",
    content: "The road of excess leads to the palace of wisdom.",
    author: "William Blake",
    tags: ["wisdom"],
    authorId: "7VD7ORpP-19B",
    authorSlug: "william-blake",
    length: 49,
  },
  {
    _id: "_1lzYCBjMDlC",
    content:
      "When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.",
    author: "Dalai Lama",
    tags: ["famous-quotes"],
    authorId: "OPVjtVVBVW5h",
    authorSlug: "dalai-lama",
    length: 155,
  },
  {
    _id: "ZKfOV0UwuugV",
    content:
      "And as we let our own light shine, we unconsciously give other people permission to do the same.",
    author: "Nelson Mandela",
    tags: ["famous-quotes"],
    authorId: "ubn8tDLlaqk6",
    authorSlug: "nelson-mandela",
    length: 96,
  },
  {
    _id: "VCPz7eYRbDs9",
    content: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop",
    tags: ["famous-quotes"],
    authorId: "XYxYtSeixS-o",
    authorSlug: "aesop",
    length: 56,
  },
  {
    _id: "0SOLhFe3M9-l",
    content: "We aim above the mark to hit the mark.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 38,
  },
  {
    _id: "Xgdo3uU5rey",
    content: "Do something wonderful, people may imitate it.",
    author: "Albert Schweitzer",
    tags: ["famous-quotes", "inspirational"],
    authorId: "ANT0MUtjmG6O",
    authorSlug: "albert-schweitzer",
    length: 46,
  },
  {
    _id: "xEYjoxqQhRfC",
    content: "A man is great by deeds, not by birth.",
    author: "Chanakya",
    tags: ["famous-quotes"],
    authorId: "szWyArKJErGq",
    authorSlug: "chanakya",
    length: 38,
  },
  {
    _id: "r2EnGdx5HG",
    content:
      "It has become appallingly obvious that our technology has exceeded our humanity.",
    author: "Albert Einstein",
    tags: ["technology"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 80,
  },
  {
    _id: "JkGCNZF9ISSN",
    content:
      "Most of the shadows of life are caused by standing in our own sunshine.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 71,
  },
  {
    _id: "pYR1eRWM7yT4",
    content:
      "Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.",
    author: "Margaret Laurence",
    tags: ["famous-quotes"],
    authorId: "ZDgdNzHUFajm",
    authorSlug: "margaret-laurence",
    length: 159,
  },
  {
    _id: "QGY0TiFjpdj2",
    content:
      "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    author: "Audre Lorde",
    tags: ["famous-quotes"],
    authorId: "ykLNBe560sqb",
    authorSlug: "audre-lorde",
    length: 136,
  },
  {
    _id: "6dj60GUobqhK",
    content:
      "Think for yourselves and let others enjoy the privilege to do so too.",
    author: "Voltaire",
    tags: ["famous-quotes"],
    authorId: "ZyuVXKFVTZu8",
    authorSlug: "voltaire",
    length: 69,
  },
  {
    _id: "ueyq9zjTg9Rb",
    content: "Every gift from a friend is a wish for your happiness.",
    author: "Richard Bach",
    tags: ["famous-quotes"],
    authorId: "t9lNqDH0TmYo",
    authorSlug: "richard-bach",
    length: 54,
  },
  {
    _id: "5UL7N8Q2QEH1",
    content:
      "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.",
    author: "Denis Waitley",
    tags: ["famous-quotes"],
    authorId: "Ge0tkRMVUicu",
    authorSlug: "denis-waitley",
    length: 118,
  },
  {
    _id: "vbTwRyX9uu",
    content:
      "Genius unrefined resembles a flash of lightning, but wisdom is like the sun.",
    author: "Franz Grillparzer",
    tags: ["wisdom"],
    authorId: "CxfrvMHSHQ",
    authorSlug: "franz-grillparzer",
    length: 76,
  },
  {
    _id: "HQmAwGraUV",
    content:
      "Tragedy is a tool for the living to gain wisdom, not a guide by which to live.",
    author: "Robert F. Kennedy",
    tags: ["wisdom"],
    authorId: "1qqH4MEkASdy",
    authorSlug: "robert-f-kennedy",
    length: 78,
  },
  {
    _id: "6vrEW1dd1Q",
    content:
      "He who is taught to live upon little owes more to his father's wisdom than he who has a great deal left him does to his father's care.",
    author: "William C. Menninger",
    tags: ["wisdom"],
    authorId: "PyQOMX6cxaNs",
    authorSlug: "william-c-menninger",
    length: 134,
  },
  {
    _id: "aJ-kdYIolJ8-",
    content:
      "Accept challenges, so that you may feel the exhilaration of victory.",
    author: "George S. Patton",
    tags: ["famous-quotes"],
    authorId: "fdSvvuZORmh4",
    authorSlug: "george-s-patton",
    length: 68,
  },
  {
    _id: "-0DZUCVFcb",
    content: "Friendship is Love without his wings!",
    author: "Lord Byron",
    tags: ["friendship"],
    authorId: "EUjr2jc6nT",
    authorSlug: "lord-byron",
    length: 37,
  },
  {
    _id: "AUGTBH2V__b",
    content: "True friends stab you in the front.",
    author: "Oscar Wilde",
    tags: ["friendship", "famous-quotes"],
    authorId: "yw5O7wULaKfx",
    authorSlug: "oscar-wilde",
    length: 35,
  },
  {
    _id: "R7wXqieTTo",
    content: "Value your friendship. Value your relationships.",
    author: "Barbara Bush",
    tags: ["friendship"],
    authorId: "Qw_ksGjkS8",
    authorSlug: "barbara-bush",
    length: 48,
  },
  {
    _id: "ST-c8lhICwVj",
    content:
      "There is never enough time to do everything, but there is always enough time to do the most important thing.",
    author: "Brian Tracy",
    tags: ["famous-quotes"],
    authorId: "VC1mZHGb7rAH",
    authorSlug: "brian-tracy",
    length: 108,
  },
  {
    _id: "VsarQ0iEgE1",
    content:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "Bernard Shaw",
    tags: ["famous-quotes"],
    authorId: "gk8iLycW0DFC",
    authorSlug: "bernard-shaw",
    length: 67,
  },
  {
    _id: "S5Id5SJmu6Jp",
    content:
      "No one has a finer command of language than the person who keeps his mouth shut.",
    author: "Sam Rayburn",
    tags: ["famous-quotes"],
    authorId: "unPacEQP5CiA",
    authorSlug: "sam-rayburn",
    length: 80,
  },
  {
    _id: "n1CKSLhX-iSp",
    content:
      "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.",
    author: "Kathleen Norris",
    tags: ["famous-quotes"],
    authorId: "B50xTKgH0R4-",
    authorSlug: "kathleen-norris",
    length: 106,
  },
  {
    _id: "oAtERLD0yyQR",
    content: "He who knows, does not speak. He who speaks, does not know.",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 59,
  },
  {
    _id: "WQbJJwEFP1l9",
    content:
      "In the depth of winter, I finally learned that there was within me an invincible summer.",
    author: "Albert Camus",
    tags: ["famous-quotes", "inspirational"],
    authorId: "RmuonXrXY44Z",
    authorSlug: "albert-camus",
    length: 88,
  },
  {
    _id: "smwaq6O8Hk",
    content:
      "You can always tell a real friend: when you've made a fool of yourself he doesn't feel you've done a permanent job.",
    author: "Laurence J. Peter",
    tags: ["friendship"],
    authorId: "YQGk6ZEcJXwb",
    authorSlug: "laurence-j-peter",
    length: 115,
  },
  {
    _id: "obE41Svazc",
    content: "True knowledge exists in knowing that you know nothing.",
    author: "Isocrates",
    tags: ["wisdom"],
    authorId: "6emd99Cst9Cf",
    authorSlug: "isocrates",
    length: 55,
  },
  {
    _id: "2a7xKeQ1JWGy",
    content:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 110,
  },
  {
    _id: "xwABJFIJQVwW",
    content:
      "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.",
    author: "Barbara De Angelis",
    tags: ["famous-quotes"],
    authorId: "o77X2PrW6mcZ",
    authorSlug: "barbara-de-angelis",
    length: 159,
  },
  {
    _id: "XdeBIvTg0D",
    content: "Be the chief but never the lord.",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 32,
  },
  {
    _id: "JfTBllGjt7L",
    content: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
    tags: ["famous-quotes"],
    authorId: "5F2Uwpllj",
    authorSlug: "william-shakespeare",
    length: 40,
  },
  {
    _id: "OSaopvW0IUd",
    content: "The more you know yourself, the more you forgive yourself.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 58,
  },
  {
    _id: "nx2M9kL0EgcI",
    content: "Do good by stealth, and blush to find it fame.",
    author: "Alexander Pope",
    tags: ["famous-quotes"],
    authorId: "_gz-cfmqA1mr",
    authorSlug: "alexander-pope",
    length: 46,
  },
  {
    _id: "3E7C0r4EhlHT",
    content:
      "Build a better mousetrap and the world will beat a path to your door.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 69,
  },
  {
    _id: "z-hDjBf4spF-",
    content: "Make the most of yourself, for that is all there is of you.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 59,
  },
  {
    _id: "r8LdcYbz3s_",
    content:
      "In wisdom gathered over time I have found that every experience is a form of exploration.",
    author: "Ansel Adams",
    tags: ["wisdom"],
    authorId: "4ejQsV_Lu2",
    authorSlug: "ansel-adams",
    length: 89,
  },
  {
    _id: "dO8CMrZCBgBw",
    content:
      "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
    author: "Ovid",
    tags: ["famous-quotes"],
    authorId: "f9utPohz0fgH",
    authorSlug: "ovid",
    length: 117,
  },
  {
    _id: "Vs-4YEGn",
    content: "I can, therefore I am.",
    author: "Simone Weil",
    tags: ["inspirational"],
    authorId: "bUP0cHEuKQBn",
    authorSlug: "simone-weil",
    length: 22,
  },
  {
    _id: "A1JTIXKBd-S",
    content: "The only real valuable thing is intuition.",
    author: "Albert Einstein",
    tags: ["famous-quotes"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 42,
  },
  {
    _id: "N9BhgsYxSz",
    content: "Some people go to priests; others to poetry; I to my friends.",
    author: "Virginia Woolf",
    tags: ["friendship"],
    authorId: "_ITh8zk9Aj",
    authorSlug: "virginia-woolf",
    length: 61,
  },
  {
    _id: "OSF3eMB6sZaP",
    content:
      "Liberty, taking the word in its concrete sense, consists in the ability to choose.",
    author: "Simone Weil",
    tags: ["famous-quotes"],
    authorId: "bUP0cHEuKQBn",
    authorSlug: "simone-weil",
    length: 82,
  },
  {
    _id: "uXHzy3qRhoCy",
    content:
      "If we are not fully ourselves, truly in the present moment, we miss everything.",
    author: "Thích Nhất Hạnh",
    tags: ["famous-quotes"],
    authorId: "N0pHADD097gY",
    authorSlug: "thich-nhất-hạnh",
    length: 79,
  },
  {
    _id: "N3YI0c4c6TR",
    content: "I allow my intuition to lead my path.",
    author: "Manuel Puig",
    tags: ["famous-quotes"],
    authorId: "UJel-JAtoHj1",
    authorSlug: "manuel-puig",
    length: 37,
  },
  {
    _id: "6c2h-AtqMj6d",
    content:
      "You can stand tall without standing on someone. You can be a victor without having victims.",
    author: "Harriet Woods",
    tags: ["famous-quotes"],
    authorId: "3lL0AlxRBSU_",
    authorSlug: "harriet-woods",
    length: 91,
  },
  {
    _id: "puEMvYGsD",
    content:
      "Loyalty and friendship, which is to me the same, created all the wealth that I've ever thought I'd have.",
    author: "Ernie Banks",
    tags: ["friendship"],
    authorId: "Chx-QR-kwO",
    authorSlug: "ernie-banks",
    length: 104,
  },
  {
    _id: "z56LpsUqHr",
    content: "Wisdom is oftentimes nearer when we stoop than when we soar.",
    author: "William Wordsworth",
    tags: ["wisdom"],
    authorId: "pcN62RXd7Z",
    authorSlug: "william-wordsworth",
    length: 60,
  },
  {
    _id: "_ZVJWv9HJsBe",
    content: "Whoever is happy will make others happy, too.",
    author: "Mark Twain",
    tags: ["famous-quotes"],
    authorId: "zbADvkP0r05L",
    authorSlug: "mark-twain",
    length: 45,
  },
  {
    _id: "ARKzsqVpFY",
    content:
      "Two persons cannot long be friends if they cannot forgive each other's little failings.",
    author: "Jean de La Bruyère",
    tags: ["friendship"],
    authorId: "X28vkua13m",
    authorSlug: "jean-de-la-bruyere",
    length: 87,
  },
  {
    _id: "je7UytrRlH-0",
    content: "The supreme art of war is to subdue the enemy without fighting.",
    author: "Sun Tzu",
    tags: ["famous-quotes"],
    authorId: "G-QcoRJkxKHQ",
    authorSlug: "sun-tzu",
    length: 63,
  },
  {
    _id: "m29XGLtQho",
    content:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Hal Abelson",
    tags: ["technology"],
    authorId: "pPc8J2hf_",
    authorSlug: "hal-abelson",
    length: 91,
  },
  {
    _id: "JjBqM4t-sxsr",
    content:
      "Wise men talk because they have something to say; fools, because they have to say something.",
    author: "Plato",
    tags: ["famous-quotes"],
    authorId: "VtJS8G9y5FL1",
    authorSlug: "plato",
    length: 92,
  },
  {
    _id: "K1iJC1T4pDf",
    content:
      "I believe that we are fundamentally the same and have the same basic potential.",
    author: "Dalai Lama",
    tags: ["famous-quotes"],
    authorId: "OPVjtVVBVW5h",
    authorSlug: "dalai-lama",
    length: 79,
  },
  {
    _id: "Rp9oE96Hqv9j",
    content:
      "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.",
    author: "Napoleon Hill",
    tags: ["famous-quotes"],
    authorId: "N4h708MyElyG",
    authorSlug: "napoleon-hill",
    length: 121,
  },
  {
    _id: "Mv26be7c-4_i",
    content:
      "Everything that irritates us about others can lead us to a better understanding of ourselves.",
    author: "Carl Jung",
    tags: ["famous-quotes"],
    authorId: "-LYBJJujV7RL",
    authorSlug: "carl-jung",
    length: 93,
  },
  {
    _id: "w_JEQv9o4sF",
    content: "The truest wisdom is a resolute determination.",
    author: "Napoleon",
    tags: ["famous-quotes", "wisdom"],
    authorId: "xlnMchFC2VJG",
    authorSlug: "napoleon",
    length: 46,
  },
  {
    _id: "xD83G0bc53Gp",
    content:
      "All men have a sweetness in their life. That is what helps them go on. It is towards that they turn when they feel too worn out.",
    author: "Albert Camus",
    tags: ["famous-quotes"],
    authorId: "RmuonXrXY44Z",
    authorSlug: "albert-camus",
    length: 128,
  },
  {
    _id: "xqpuo_rjf_1g",
    content:
      "To dare is to lose ones footing momentarily. To not dare is to lose oneself.",
    author: "Søren Kierkegaard",
    tags: ["famous-quotes"],
    authorId: "ZEGr5G7ktW1L",
    authorSlug: "soren-kierkegaard",
    length: 76,
  },
  {
    _id: "gXJa2hBwIpVh",
    content: "Arriving at one point is the starting point to another.",
    author: "John Dewey",
    tags: ["famous-quotes"],
    authorId: "_C0q1b52VOtH",
    authorSlug: "john-dewey",
    length: 55,
  },
  {
    _id: "9knYf-nVYu10",
    content:
      "The least of things with a meaning is worth more in life than the greatest of things without it.",
    author: "Carl Jung",
    tags: ["famous-quotes"],
    authorId: "-LYBJJujV7RL",
    authorSlug: "carl-jung",
    length: 96,
  },
  {
    _id: "i5NVHAIzPDWa",
    content: "The awareness of our own strength makes us modest.",
    author: "Paul Cézanne",
    tags: ["famous-quotes"],
    authorId: "SU_Z9xGuikYn",
    authorSlug: "paul-cezanne",
    length: 50,
  },
  {
    _id: "-LwlAMmYmOG",
    content: "Kind words do not cost much. Yet they accomplish much.",
    author: "Blaise Pascal",
    tags: ["famous-quotes"],
    authorId: "RzEwhF8861WC",
    authorSlug: "blaise-pascal",
    length: 54,
  },
  {
    _id: "WsswXPIbtq1p",
    content: "To hell with circumstances; I create opportunities.",
    author: "Bruce Lee",
    tags: ["famous-quotes"],
    authorId: "raaFe2cXACnG",
    authorSlug: "bruce-lee",
    length: 51,
  },
  {
    _id: "nFRdjQdGL4v5",
    content:
      "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.",
    author: "Washington Irving",
    tags: ["famous-quotes"],
    authorId: "NTzdD9ZDCzOR",
    authorSlug: "washington-irving",
    length: 91,
  },
  {
    _id: "UNkrqEJixcvb",
    content: "You must welcome change as the rule but not as your ruler.",
    author: "Denis Waitley",
    tags: ["famous-quotes"],
    authorId: "Ge0tkRMVUicu",
    authorSlug: "denis-waitley",
    length: 58,
  },
  {
    _id: "tSVLiDTGay4S",
    content:
      "Love cures people - both the ones who give it and the ones who receive it.",
    author: "Karl Menninger",
    tags: ["famous-quotes"],
    authorId: "Cq01vUii_wxS",
    authorSlug: "karl-menninger",
    length: 74,
  },
  {
    _id: "qaVA31y0GA1Q",
    content:
      "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
    author: "Napoleon Hill",
    tags: ["famous-quotes"],
    authorId: "N4h708MyElyG",
    authorSlug: "napoleon-hill",
    length: 81,
  },
  {
    _id: "5xt93w4ql_UM",
    content:
      "Never idealize others. They will never live up to your expectations.",
    author: "Leo Buscaglia",
    tags: ["famous-quotes"],
    authorId: "XVzZKXv06YQG",
    authorSlug: "leo-buscaglia",
    length: 68,
  },
  {
    _id: "WuHLOLFI2uKy",
    content:
      "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.",
    author: "Dalai Lama",
    tags: ["famous-quotes"],
    authorId: "OPVjtVVBVW5h",
    authorSlug: "dalai-lama",
    length: 109,
  },
  {
    _id: "UQ2TjZ5IIDSR",
    content:
      "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either.",
    author: "Albert Einstein",
    tags: ["famous-quotes"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 96,
  },
  {
    _id: "bhseVu9PSh1I",
    content:
      "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    author: "Marcus Aurelius",
    tags: ["famous-quotes"],
    authorId: "zW_A5fM6XU-v",
    authorSlug: "marcus-aurelius",
    length: 129,
  },
  {
    _id: "JqusXYQEGNPC",
    content:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
    author: "Thomas Jefferson",
    tags: ["famous-quotes"],
    authorId: "Zy4xV5ItRxmv",
    authorSlug: "thomas-jefferson",
    length: 86,
  },
  {
    _id: "bkL1a4IExc",
    content:
      "Motivation is the art of getting people to do what you want them to do because they want to do it.",
    author: "Dwight D. Eisenhower",
    tags: ["inspirational"],
    authorId: "JSoEc_6dY",
    authorSlug: "dwight-d-eisenhower",
    length: 98,
  },
  {
    _id: "x6LCvKtrXx",
    content:
      "All love that has not friendship for its base, is like a mansion built upon the sand.",
    author: "Ella Wheeler Wilcox",
    tags: ["friendship", "love"],
    authorId: "uKzj7T5Huj",
    authorSlug: "ella-wheeler-wilcox",
    length: 85,
  },
  {
    _id: "mjKwHGRjIE",
    content:
      "The more you like yourself, the less you are like anyone else, which makes you unique.",
    author: "Walt Disney",
    tags: ["wisdom"],
    authorId: "HzyhMbP15DoD",
    authorSlug: "walt-disney",
    length: 86,
  },
  {
    _id: "S47CRwtgyIsp",
    content:
      "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.",
    author: "Albert Schweitzer",
    tags: ["famous-quotes"],
    authorId: "ANT0MUtjmG6O",
    authorSlug: "albert-schweitzer",
    length: 137,
  },
  {
    _id: "oM0UB2sH4t",
    author: "William Shakespeare",
    content: "Action is eloquence!",
    tags: ["literature", "famous-quotes"],
    authorId: "5F2Uwpllj",
    authorSlug: "william-shakespeare",
    length: 20,
  },
  {
    _id: "305CvwuKqye",
    content: "The heart has its reasons which reason knows not of.",
    author: "Blaise Pascal",
    tags: ["famous-quotes"],
    authorId: "RzEwhF8861WC",
    authorSlug: "blaise-pascal",
    length: 52,
  },
  {
    _id: "yZ1f2VZoK93Z",
    content:
      "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.",
    author: "William Saroyan",
    tags: ["famous-quotes"],
    authorId: "5-_LwDOxI_Fb",
    authorSlug: "william-saroyan",
    length: 118,
  },
  {
    _id: "SDhP8UAmtD09",
    content:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    author: "Barack Obama",
    tags: ["famous-quotes"],
    authorId: "Xt2CsBHup4NB",
    authorSlug: "barack-obama",
    length: 106,
  },
  {
    _id: "xDhw8-7y3p",
    content:
      "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.",
    author: "George Herbert",
    tags: ["inspirational"],
    authorId: "6VObium64",
    authorSlug: "george-herbert",
    length: 179,
  },
  {
    _id: "KJhB_lkgrbPa",
    content: "It is better to understand a little than to misunderstand a lot.",
    author: "Anatole France",
    tags: ["famous-quotes"],
    authorId: "anpE1ceNi3xv",
    authorSlug: "anatole-france",
    length: 64,
  },
  {
    _id: "yCY2q20UK4Uf",
    content:
      "Let us sacrifice our today so that our children can have a better tomorrow.",
    author: "A. P. J. Abdul Kalam",
    tags: ["famous-quotes", "inspirational"],
    authorId: "Bblz8Knp6-ZB",
    authorSlug: "a-p-j-abdul-kalam",
    length: 75,
  },
  {
    _id: "yBn9DgK3vf",
    content:
      "A youth, when at home, should be filial and, abroad, respectful to his elders. He should be earnest and truthful. He should overflow in love to all and cultivate the friendship of the good. When he has time and opportunity, after the performance of these things, he should employ them in polite studies.",
    author: "Confucius",
    tags: ["friendship"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 303,
  },
  {
    _id: "gZavCRsLqcse",
    content:
      "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    author: "John Keats",
    tags: ["famous-quotes"],
    authorId: "mXQPMe-Kg_wJ",
    authorSlug: "john-keats",
    length: 92,
  },
  {
    _id: "auaOSkmWy91",
    content:
      "Read as you taste fruit or savor wine, or enjoy friendship, love or life.",
    author: "George Herbert",
    tags: ["friendship"],
    authorId: "6VObium64",
    authorSlug: "george-herbert",
    length: 73,
  },
  {
    _id: "D6Yr5I9ikXXc",
    content:
      "If you do what you've always done, you'll get what youve always gotten.",
    author: "Tony Robbins",
    tags: ["famous-quotes"],
    authorId: "IkUGwHTcaXs9",
    authorSlug: "tony-robbins",
    length: 71,
  },
  {
    _id: "OCgCMtjcY3HJ",
    content: "Respect should be earned by actions, and not acquired by years.",
    author: "Frank Lloyd Wright",
    tags: ["famous-quotes"],
    authorId: "U3a52-LjQPgz",
    authorSlug: "frank-lloyd-wright",
    length: 63,
  },
  {
    _id: "JP0Z6kpYem0y",
    content:
      "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
    author: "Plato",
    tags: ["famous-quotes"],
    authorId: "VtJS8G9y5FL1",
    authorSlug: "plato",
    length: 137,
  },
  {
    _id: "_6z2BhrSP8hw",
    content:
      "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 124,
  },
  {
    _id: "DiIyvrMPCZUK",
    content:
      "The universe is full of magical things, patiently waiting for our wits to grow sharper.",
    author: "Eden Phillpotts",
    tags: ["famous-quotes"],
    authorId: "qaLujpsc9zLA",
    authorSlug: "eden-phillpotts",
    length: 87,
  },
  {
    _id: "4zV5Pz4HES",
    content:
      "Where is the Life we have lost in living? Where is the wisdom we have lost in knowledge? Where is the knowledge we have lost in information?",
    author: "George Eliot",
    tags: ["wisdom"],
    authorId: "MRCvek-GcKNk",
    authorSlug: "george-eliot",
    length: 140,
  },
  {
    _id: "qGMGUH1ric",
    content:
      "Friendship is always a sweet responsibility, never an opportunity.",
    author: "Kahlil Gibran",
    tags: ["friendship"],
    authorId: "h05GYnKzckM3",
    authorSlug: "kahlil-gibran",
    length: 66,
  },
  {
    _id: "QLHIDLCkdjB",
    content:
      "The winds and waves are always on the side of the ablest navigators.",
    author: "Edward Gibbon",
    tags: ["famous-quotes"],
    authorId: "YT9gVcO1Iwl9",
    authorSlug: "edward-gibbon",
    length: 68,
  },
  {
    _id: "kvTitxhuKqUw",
    content:
      "There is only one success - to be able to spend your life in your own way.",
    author: "Christopher Morley",
    tags: ["famous-quotes"],
    authorId: "SWPwu5PcQUso",
    authorSlug: "christopher-morley",
    length: 74,
  },
  {
    _id: "5eTiZJCTAy9B",
    content: "Whoso loves, believes the impossible.",
    author: "Elizabeth Browning",
    tags: ["famous-quotes"],
    authorId: "9gFTpOXrxt8c",
    authorSlug: "elizabeth-browning",
    length: 37,
  },
  {
    _id: "hLCOLhZE_92V",
    content: "Reality is merely an illusion, albeit a very persistent one.",
    author: "Albert Einstein",
    tags: ["famous-quotes", "science", "wisdom"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 60,
  },
  {
    _id: "MONDu5bf8JmU",
    content:
      "If you love life, don't waste time, for time is what life is made up of.",
    author: "Bruce Lee",
    tags: ["famous-quotes"],
    authorId: "raaFe2cXACnG",
    authorSlug: "bruce-lee",
    length: 72,
  },
  {
    _id: "IyF7fIZIc3XX",
    content:
      "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
    author: "Amelia Earhart",
    tags: ["famous-quotes"],
    authorId: "by3TkPSn9iVA",
    authorSlug: "amelia-earhart",
    length: 238,
  },
  {
    _id: "iLP7-hx1ktyO",
    content: "Do what you can. Want what you have. Be who you are.",
    author: "Forrest Church",
    tags: ["famous-quotes"],
    authorId: "NvKBMv_KbtVs",
    authorSlug: "forrest-church",
    length: 52,
  },
  {
    _id: "wPJ_Mb4EjPlE",
    content:
      "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.",
    author: "Paavo Nurmi",
    tags: ["famous-quotes"],
    authorId: "SckF0U8Iy85M",
    authorSlug: "paavo-nurmi",
    length: 85,
  },
  {
    _id: "QtuKHLeFEBK5",
    content:
      "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.",
    author: "Sam Keen",
    tags: ["famous-quotes"],
    authorId: "hWxSyExpHl40",
    authorSlug: "sam-keen",
    length: 102,
  },
  {
    _id: "-Hqy06gxrO",
    content:
      "A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love.",
    author: "Basil of Caesarea",
    tags: ["wisdom", "friendship"],
    authorId: "6bnXdruCW",
    authorSlug: "basil-of-caesarea",
    length: 156,
  },
  {
    _id: "r5SEZsvbKwTw",
    content:
      "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.",
    author: "Sai Baba",
    tags: ["famous-quotes"],
    authorId: "ZuwCV8XgXVtt",
    authorSlug: "sai-baba",
    length: 116,
  },
  {
    _id: "6aKJM5st-C",
    content:
      "It is more shameful to distrust our friends than to be deceived by them.",
    author: "Confucius",
    tags: ["friendship", "famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 72,
  },
  {
    _id: "P2UE04MWtcme",
    content: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 48,
  },
  {
    _id: "bcAbPetiKzd",
    content: "Learn from yesterday, live for today, hope for tomorrow.",
    author: "Albert Einstein",
    tags: ["famous-quotes", "inspirational"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 56,
  },
  {
    _id: "2tzuQm94r9D",
    content: "He who talks more is sooner exhausted.",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 38,
  },
  {
    _id: "hhDqMdHw5w",
    content:
      "If there is such a thing as a good marriage, it is because it resembles friendship rather than love.",
    author: "Michel de Montaigne",
    tags: ["friendship", "love"],
    authorId: "B2lKC8XK8Dh7",
    authorSlug: "michel-de-montaigne",
    length: 100,
  },
  {
    _id: "lnt4f9WI2nt",
    content: "If a man does his best, what else is there?",
    author: "George S. Patton",
    tags: ["famous-quotes"],
    authorId: "fdSvvuZORmh4",
    authorSlug: "george-s-patton",
    length: 43,
  },
  {
    _id: "WjEYIJ2XWpE5",
    content:
      "Fine words and an insinuating appearance are seldom associated with true virtue",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 79,
  },
  {
    _id: "EEdhZ7MQ8",
    content:
      "Your talent is God's gift to you. What you do with it is your gift back to God.",
    author: "Leo Buscaglia",
    tags: ["inspirational"],
    authorId: "XVzZKXv06YQG",
    authorSlug: "leo-buscaglia",
    length: 79,
  },
  {
    _id: "jTzIvr-aog",
    content: "Quick decisions are unsafe decisions.",
    author: "Sophocles",
    tags: ["wisdom"],
    authorId: "bBwlN7LI2Jtu",
    authorSlug: "sophocles",
    length: 37,
  },
  {
    _id: "_0Xe3v-BJjUx",
    content:
      "To fly as fast as thought, you must begin by knowing that you have already arrived.",
    author: "Richard Bach",
    tags: ["famous-quotes"],
    authorId: "t9lNqDH0TmYo",
    authorSlug: "richard-bach",
    length: 83,
  },
  {
    _id: "rWlO2ihzqhk",
    content: "Better be ignorant of a matter than half know it.",
    author: "Publilius Syrus",
    tags: ["famous-quotes"],
    authorId: "uvj7ffI-Yu4z",
    authorSlug: "publilius-syrus",
    length: 49,
  },
  {
    _id: "Ckh_FdZYHyf",
    content: "I destroy my enemies when I make them my friends.",
    author: "Abraham Lincoln",
    tags: ["famous-quotes", "history", "politics", "friendship"],
    authorId: "8k75S1ntV9GW",
    authorSlug: "abraham-lincoln",
    length: 49,
  },
  {
    _id: "7Gy2Y5Zxuzh",
    content: "Autumn is a second spring when every leaf is a flower.",
    author: "Albert Camus",
    tags: ["famous-quotes", "nature"],
    authorId: "RmuonXrXY44Z",
    authorSlug: "albert-camus",
    length: 54,
  },
  {
    _id: "oG014O92mM",
    content: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
    tags: ["famous-quotes"],
    authorId: "-HVEQO7Ru6d_",
    authorSlug: "yogi-berra",
    length: 49,
  },
  {
    _id: "3v53-XiBvtQK",
    content:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
    tags: ["famous-quotes"],
    authorId: "4J6_dx73YbT5",
    authorSlug: "mahatma-gandhi",
    length: 79,
  },
  {
    _id: "OaGsXXzLiBqf",
    content:
      "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.",
    author: "Henri-Frédéric Amiel",
    tags: ["famous-quotes"],
    authorId: "AwZcCJD8ICBi",
    authorSlug: "henri-frederic-amiel",
    length: 145,
  },
  {
    _id: "a9C880IWYfsD",
    content:
      "Your mind will answer most questions if you learn to relax and wait for the answer.",
    author: "William Burroughs",
    tags: ["famous-quotes"],
    authorId: "UFjVKUUywWBZ",
    authorSlug: "william-burroughs",
    length: 83,
  },
  {
    _id: "X6UDrdk4ZIk",
    content:
      "Pure, holy simplicity confounds all the wisdom of this world and the wisdom of the flesh.",
    author: "Francis of Assisi",
    tags: ["wisdom"],
    authorId: "axdVU-ILRg-V",
    authorSlug: "francis-of-assisi",
    length: 89,
  },
  {
    _id: "rc2Yx_x_X0qD",
    content: "The less effort, the faster and more powerful you will be.",
    author: "Bruce Lee",
    tags: ["famous-quotes"],
    authorId: "raaFe2cXACnG",
    authorSlug: "bruce-lee",
    length: 58,
  },
  {
    _id: "e1n5aMOunl1g",
    content: "If I know what love is, it is because of you.",
    author: "Hermann Hesse",
    tags: ["famous-quotes"],
    authorId: "plI0y2ZLokNn",
    authorSlug: "hermann-hesse",
    length: 45,
  },
  {
    _id: "hXmMutk9Y8Nd",
    content:
      "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Søren Kierkegaard",
    tags: ["famous-quotes"],
    authorId: "ZEGr5G7ktW1L",
    authorSlug: "soren-kierkegaard",
    length: 68,
  },
  {
    _id: "RFbQKIDffV",
    content:
      "I decided that it was not wisdom that enabled poets to write their poetry, but a kind of instinct or inspiration, such as you find in seers and prophets who deliver all their sublime messages without knowing in the least what they mean.",
    author: "Isocrates",
    tags: ["wisdom"],
    authorId: "6emd99Cst9Cf",
    authorSlug: "isocrates",
    length: 236,
  },
  {
    _id: "DNjQty5jeU",
    content:
      "Communications tools don’t get socially interesting until they get technologically boring.",
    author: "Clay Shirky",
    tags: ["technology"],
    authorId: "Y3mgXKqW-",
    authorSlug: "clay-shirky",
    length: 90,
  },
  {
    _id: "2i4ILvPHXsgJ",
    content:
      "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
    author: "Michael Jordan",
    tags: ["famous-quotes"],
    authorId: "XU7cPmNoohKd",
    authorSlug: "michael-jordan",
    length: 107,
  },
  {
    _id: "uqRZV8skVN",
    content:
      "The way you see people is the way you treat them, and the way you treat them is what they become.",
    author: "Johann Wolfgang von Goethe",
    tags: ["wisdom"],
    authorId: "aW1ZR-8LuS28",
    authorSlug: "johann-wolfgang-von-goethe",
    length: 97,
  },
  {
    _id: "ZR3wECF-tFj",
    content: "He is able who thinks he is able.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 33,
  },
  {
    _id: "ZP4Osu902G-r",
    content: "The only real mistake is the one from which we learn nothing.",
    author: "John Powell",
    tags: ["famous-quotes"],
    authorId: "N5zjr1qxROEY",
    authorSlug: "john-powell",
    length: 61,
  },
  {
    _id: "gZSiJPLyt_zX",
    content:
      "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: "Aldous Huxley",
    tags: ["famous-quotes", "inspirational"],
    authorId: "9B-Gz0CukKAX",
    authorSlug: "aldous-huxley",
    length: 99,
  },
  {
    _id: "pt90_r-76Lj5",
    content:
      "All children are artists. The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
    tags: ["famous-quotes"],
    authorId: "atthH9QDwIJB",
    authorSlug: "pablo-picasso",
    length: 82,
  },
  {
    _id: "7hfEG8Iv86",
    content:
      "Friendship is the marriage of the soul, and this marriage is liable to divorce.",
    author: "Voltaire",
    tags: ["friendship"],
    authorId: "ZyuVXKFVTZu8",
    authorSlug: "voltaire",
    length: 79,
  },
  {
    _id: "L5sDM2UaWlBt",
    content: "The pain passes, but the beauty remains.",
    author: "Pierre-Auguste Renoir",
    tags: ["famous-quotes"],
    authorId: "wuP9CCCc0AtJ",
    authorSlug: "pierre-auguste-renoir",
    length: 40,
  },
  {
    _id: "U8B6iFEz1V7",
    content: "An ant on the move does more than a dozing ox",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 45,
  },
  {
    _id: "k8oFtw9mQpi",
    content: "Loss is nothing else but change,and change is Natures delight.",
    author: "Marcus Aurelius",
    tags: ["famous-quotes"],
    authorId: "zW_A5fM6XU-v",
    authorSlug: "marcus-aurelius",
    length: 62,
  },
  {
    _id: "O91gdjzOjLa6",
    content: "Listen to what you know instead of what you fear.",
    author: "Richard Bach",
    tags: ["famous-quotes"],
    authorId: "t9lNqDH0TmYo",
    authorSlug: "richard-bach",
    length: 49,
  },
  {
    _id: "KaIFTRaBv59T",
    content: "Always seek out the seed of triumph in every adversity.",
    author: "Og Mandino",
    tags: ["famous-quotes", "wisdom"],
    authorId: "xcLBIo1fbkkh",
    authorSlug: "og-mandino",
    length: 55,
  },
  {
    _id: "Wxf1mhZ7ipPU",
    content:
      "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration.",
    author: "Niccolò Machiavelli",
    tags: ["famous-quotes"],
    authorId: "VKXFr-ptJb7Q",
    authorSlug: "niccolo-machiavelli",
    length: 118,
  },
  {
    _id: "_WiuNkQC_E_B",
    content:
      "Thought is the blossom; language the bud; action the fruit behind it.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 69,
  },
  {
    _id: "D-KuPZEq59LD",
    content:
      "The place to improve the world is first in one's own heart and head and hands.",
    author: "Robert M. Pirsig",
    tags: ["famous-quotes"],
    authorId: "kahQz7ulPX1A",
    authorSlug: "robert-m-pirsig",
    length: 78,
  },
  {
    _id: "CPhGOJeapNYZ",
    content:
      "To be tested is good. The challenged life may be the best therapist.",
    author: "Gail Sheehy",
    tags: ["famous-quotes"],
    authorId: "XUX3C8oS06Ul",
    authorSlug: "gail-sheehy",
    length: 68,
  },
  {
    _id: "bmKMocxtR7bJ",
    content:
      "Your sacred space is where you can find yourself again and again.",
    author: "Joseph Campbell",
    tags: ["famous-quotes", "wisdom"],
    authorId: "XGIdt8L_MfeP",
    authorSlug: "joseph-campbell",
    length: 65,
  },
  {
    _id: "P77hDIkrjYP",
    content: "Study the past, if you would divine the future.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 47,
  },
  {
    _id: "uxtOnAdYE7Wn",
    content:
      "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently.",
    author: "William Arthur Ward",
    tags: ["famous-quotes"],
    authorId: "BbtbIJLprBVl",
    authorSlug: "william-arthur-ward",
    length: 107,
  },
  {
    _id: "5ewQ54oqW1HS",
    content:
      "It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.",
    author: "Max Planck",
    tags: ["famous-quotes"],
    authorId: "ZK_-AtwrrSOs",
    authorSlug: "max-planck",
    length: 140,
  },
  {
    _id: "_dfC0aL_AGD4",
    content:
      "Great ideas often receive violent opposition from mediocre minds.",
    author: "Albert Einstein",
    tags: ["famous-quotes", "technology"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 65,
  },
  {
    _id: "GJxkg5rxv0tw",
    content:
      "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have.",
    author: "Jean-Paul Sartre",
    tags: ["famous-quotes"],
    authorId: "JDgQh4oi5vVt",
    authorSlug: "jean-paul-sartre",
    length: 110,
  },
  {
    _id: "lEjcF-a2-Z5w",
    content:
      "Sincerity is the way of Heaven. The attainment of sincerity is the way of men.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 78,
  },
  {
    _id: "5V7Gw25dIjvc",
    content:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    tags: ["famous-quotes"],
    authorId: "OPVjtVVBVW5h",
    authorSlug: "dalai-lama",
    length: 70,
  },
  {
    _id: "HTn2Q6e3AYr",
    content: "If you wish to be a writer, write.",
    author: "Epictetus",
    tags: ["famous-quotes"],
    authorId: "HZHaUuiyIJPp",
    authorSlug: "epictetus",
    length: 34,
  },
  {
    _id: "UnmE__TaKI",
    content:
      "In action a great heart is the chief qualification. In work, a great head.",
    author: "Arthur Schopenhauer",
    tags: ["wisdom"],
    authorId: "SZV21yHaj-Po",
    authorSlug: "arthur-schopenhauer",
    length: 74,
  },
  {
    _id: "5mqeP6Q3hWIz",
    content:
      "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
    author: "Dalai Lama",
    tags: ["famous-quotes"],
    authorId: "OPVjtVVBVW5h",
    authorSlug: "dalai-lama",
    length: 92,
  },
  {
    _id: "dnatcNZd_hIB",
    content:
      "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.",
    author: "Michelangelo",
    tags: ["famous-quotes"],
    authorId: "pik1wvig1y8U",
    authorSlug: "michelangelo",
    length: 122,
  },
  {
    _id: "Ls62KqLuousc",
    content:
      "We are all inclined to judge ourselves by our ideals; others, by their acts.",
    author: "Harold Nicolson",
    tags: ["famous-quotes"],
    authorId: "cfKFCzivTtqS",
    authorSlug: "harold-nicolson",
    length: 76,
  },
  {
    _id: "_hJS3LX4Qz",
    content: "Technology has to be invented or adopted.",
    author: "Jared Diamond",
    tags: ["technology"],
    authorId: "jrYQ70dujQ",
    authorSlug: "jared-diamond",
    length: 41,
  },
  {
    _id: "UyuJSYkjSwwX",
    content:
      "Kind words can be short and easy to speak, but their echoes are truly endless.",
    author: "Mother Teresa",
    tags: ["famous-quotes"],
    authorId: "y7OXxqCaXKVa",
    authorSlug: "mother-teresa",
    length: 78,
  },
  {
    _id: "Zhr3mv7HgY4u",
    content:
      "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens.",
    author: "Carl Jung",
    tags: ["famous-quotes"],
    authorId: "-LYBJJujV7RL",
    authorSlug: "carl-jung",
    length: 119,
  },
  {
    _id: "0dCkJZJYZa75",
    content: "When the solution is simple, God is answering.",
    author: "Albert Einstein",
    tags: ["famous-quotes", "religion"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 46,
  },
  {
    _id: "0zPVpv3bI",
    content:
      "You can't cross the sea merely by standing and staring at the water.",
    author: "Rabindranath Tagore",
    tags: ["inspirational"],
    authorId: "FYm0s5rHORUu",
    authorSlug: "rabindranath-tagore",
    length: 68,
  },
  {
    _id: "aAHoOxRG8pTE",
    content:
      "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 105,
  },
  {
    _id: "WSpdlKZYCP",
    content:
      "Technology… the knack of so arranging the world that we don’t have to experience it.",
    author: "Max Frisch",
    tags: ["technology"],
    authorId: "Q1jb5vE0Z",
    authorSlug: "max-frisch",
    length: 84,
  },
  {
    _id: "C5_AURs6v6",
    content:
      "Friendship is the source of the greatest pleasures, and without friends even the most agreeable pursuits become tedious.",
    author: "Thomas Aquinas",
    tags: ["friendship"],
    authorId: "aqllap-WMqA7",
    authorSlug: "thomas-aquinas",
    length: 120,
  },
  {
    _id: "UYpi0ue4EwbH",
    content:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
    tags: ["famous-quotes"],
    authorId: "Ayk4hyEX7Qbu",
    authorSlug: "marie-curie",
    length: 123,
  },
  {
    _id: "JqHe3XeUkv",
    content:
      "One's philosophy is not best expressed in words; it is expressed in the choices one makes... and the choices we make are ultimately our responsibility.",
    author: "Eleanor Roosevelt",
    tags: ["wisdom"],
    authorId: "1X7NWb1oyd21",
    authorSlug: "eleanor-roosevelt",
    length: 151,
  },
  {
    _id: "clw722gWp4m",
    content:
      "The invariable mark of wisdom is to see the miraculous in the common.",
    author: "Ralph Waldo Emerson",
    tags: ["wisdom"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 69,
  },
  {
    _id: "ptXvSKlkU4E7",
    content:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas Edison",
    tags: ["famous-quotes"],
    authorId: "PC4gkJPlknC3",
    authorSlug: "thomas-edison",
    length: 104,
  },
  {
    _id: "uUMvpp64j2oS",
    content:
      "To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 140,
  },
  {
    _id: "Dq9hDqahfYjZ",
    content:
      "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.",
    author: "Honoré de Balzac",
    tags: ["famous-quotes"],
    authorId: "jcH4GH-fD_Lo",
    authorSlug: "honore-de-balzac",
    length: 128,
  },
  {
    _id: "kTmtHqeUMESD",
    content: "In all things of nature there is something of the marvelous.",
    author: "Aristotle",
    tags: ["famous-quotes"],
    authorId: "Z8j-PYl90GLF",
    authorSlug: "aristotle",
    length: 60,
  },
  {
    _id: "sTma0kWPt2",
    content: "Friendship, like credit, is highest when it is not used.",
    author: "Elbert Hubbard",
    tags: ["friendship"],
    authorId: "CBoxna3kOgDk",
    authorSlug: "elbert-hubbard",
    length: 56,
  },
  {
    _id: "CF7uqSGvDt",
    content:
      "Know what's important and what isn't. Have the wisdom to know the right thing to do, the integrity to do it, the character to stand up to those who don't, and the courage to stop those who won't.",
    author: "Mark Goulston",
    tags: ["wisdom"],
    authorId: "0WD9wxpVJN",
    authorSlug: "mark-goulston",
    length: 195,
  },
  {
    _id: "9hIehvX23pvr",
    content: "There is no charm equal to tenderness of heart.",
    author: "Jane Austen",
    tags: ["famous-quotes"],
    authorId: "43J5NV_BwtPN",
    authorSlug: "jane-austen",
    length: 47,
  },
  {
    _id: "JyWzVBrhCC",
    content:
      "We don't receive wisdom; we must discover it for ourselves after a journey that no one can take for us or spare us.",
    author: "Marcel Proust",
    tags: ["wisdom"],
    authorId: "Fz5WQF7BjdJg",
    authorSlug: "marcel-proust",
    length: 115,
  },
  {
    _id: "E9rnk2e0az",
    content: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    tags: ["inspirational"],
    authorId: "ubn8tDLlaqk6",
    authorSlug: "nelson-mandela",
    length: 43,
  },
  {
    _id: "4iwVD9jYPBp",
    content: "Well done is better than well said.",
    author: "Benjamin Franklin",
    tags: ["famous-quotes"],
    authorId: "xkvcrqREjoOB",
    authorSlug: "benjamin-franklin",
    length: 35,
  },
  {
    _id: "Wxg76F8ly83k",
    content:
      "Lose an hour in the morning, and you will spend all day looking for it.",
    author: "Richard Whately",
    tags: ["famous-quotes"],
    authorId: "woIOC2CwRwXE",
    authorSlug: "richard-whately",
    length: 71,
  },
  {
    _id: "ZqHAX7IvZk",
    content: "If you want to go east, don't go west.",
    author: "Ramakrishna",
    tags: ["wisdom"],
    authorId: "ndMmFugJSl",
    authorSlug: "ramakrishna",
    length: 38,
  },
  {
    _id: "vpHGlmeIu3Oz",
    content:
      "We never understand how little we need in this world until we know the loss of it.",
    author: "J. M. Barrie",
    tags: ["famous-quotes", "wisdom"],
    authorId: "5PJN9vn8epVR",
    authorSlug: "j-m-barrie",
    length: 82,
  },
  {
    _id: "vkR90rDh-ZSA",
    content:
      "Hope arouses, as nothing else can arouse, a passion for the possible.",
    author: "William Sloane Coffin",
    tags: ["famous-quotes"],
    authorId: "-yyCeRZpAZLI",
    authorSlug: "william-sloane-coffin",
    length: 69,
  },
  {
    _id: "x8zoyRtfIPRg",
    content: "I will prepare and some day my chance will come.",
    author: "Abraham Lincoln",
    tags: ["famous-quotes", "inspirational"],
    authorId: "8k75S1ntV9GW",
    authorSlug: "abraham-lincoln",
    length: 48,
  },
  {
    _id: "UG8slERojHSm",
    content:
      "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill",
    tags: ["famous-quotes"],
    authorId: "FEM0nF4bj5r7",
    authorSlug: "winston-churchill",
    length: 68,
  },
  {
    _id: "CPwqIPvFW_",
    content:
      "I define friendship as a bond that transcends all barriers. When you are ready to expect anything and everything from friends, good, bad or ugly... that's what I call true friendship.",
    author: "Harbhajan Singh",
    tags: ["friendship"],
    authorId: "BS1P-Cx9G",
    authorSlug: "harbhajan-singh",
    length: 183,
  },
  {
    _id: "MJmapSmIK3",
    content:
      "The more sand that has escaped from the hourglass of our life, the clearer we should see through it.",
    author: "Jean-Paul Sartre",
    tags: ["wisdom"],
    authorId: "JDgQh4oi5vVt",
    authorSlug: "jean-paul-sartre",
    length: 100,
  },
  {
    _id: "Z_9VClTWUcSv",
    content:
      "Trust only movement. Life happens at the level of events, not of words. Trust movement.",
    author: "Alfred Adler",
    tags: ["famous-quotes", "life"],
    authorId: "tNaHUH10_lky",
    authorSlug: "alfred-adler",
    length: 87,
  },
  {
    _id: "eoqYvztdD6Xo",
    content:
      "You cannot travel the path until you have become the path itself.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 65,
  },
  {
    _id: "u3yMrJpE9TSf",
    content:
      "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
    author: "Arthur Rubinstein",
    tags: ["famous-quotes"],
    authorId: "KKoxEah_YUax",
    authorSlug: "arthur-rubinstein",
    length: 112,
  },
  {
    _id: "PCE3W7VuJfnu",
    content:
      "There is nothing so useless as doing efficiently that which should not be done at all.",
    author: "Peter Drucker",
    tags: ["famous-quotes"],
    authorId: "01aQwjpXclCh",
    authorSlug: "peter-drucker",
    length: 86,
  },
  {
    _id: "PTVGpNzPj2ip",
    content:
      "Im not in this world to live up to your expectations and you're not in this world to live up to mine.",
    author: "Bruce Lee",
    tags: ["famous-quotes"],
    authorId: "raaFe2cXACnG",
    authorSlug: "bruce-lee",
    length: 101,
  },
  {
    _id: "hwA4bNHgJPCa",
    content: "Impossibilities are merely things which we have not yet learned.",
    author: "Charles W. Chesnutt",
    tags: ["famous-quotes"],
    authorId: "ATQjES-_ebWe",
    authorSlug: "charles-w-chesnutt",
    length: 64,
  },
  {
    _id: "GnTIVgh6A0KW",
    content:
      "Work while you have the light. You are responsible for the talent that has been entrusted to you.",
    author: "Henri-Frédéric Amiel",
    tags: ["famous-quotes"],
    authorId: "AwZcCJD8ICBi",
    authorSlug: "henri-frederic-amiel",
    length: 97,
  },
  {
    _id: "I6Dxu4p7VBt",
    content: "To fly, we have to have resistance.",
    author: "Maya Lin",
    tags: ["famous-quotes"],
    authorId: "lySRln7fv5Tr",
    authorSlug: "maya-lin",
    length: 35,
  },
  {
    _id: "WJ5c36Guag1",
    content:
      "I will give you a definition of a proud man: he is a man who has neither vanity nor wisdom one filled with hatreds cannot be vain, neither can he be wise.",
    author: "John Keats",
    tags: ["wisdom"],
    authorId: "mXQPMe-Kg_wJ",
    authorSlug: "john-keats",
    length: 154,
  },
  {
    _id: "GwbIPJqtzp",
    content: "Wisdom has never made a bigot, but learning has.",
    author: "Josh Billings",
    tags: ["wisdom"],
    authorId: "OIytiShDXY",
    authorSlug: "josh-billings",
    length: 48,
  },
  {
    _id: "TLfamqFncI8p",
    content:
      "There are no failures. Just experiences and your reactions to them.",
    author: "Tom Krause",
    tags: ["famous-quotes"],
    authorId: "qhAZivyJJPzu",
    authorSlug: "tom-krause",
    length: 67,
  },
  {
    _id: "1YubdPwZ3e",
    content: "It is good even for old men to learn wisdom.",
    author: "Aeschylus",
    tags: ["wisdom"],
    authorId: "ossJxB6-1",
    authorSlug: "aeschylus",
    length: 44,
  },
  {
    _id: "fjzdxv7x2mJd",
    content:
      "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour.",
    author: "Mary Kay Ash",
    tags: ["famous-quotes"],
    authorId: "I0bbus5BtlYr",
    authorSlug: "mary-kay-ash",
    length: 130,
  },
  {
    _id: "Z_czr8xado",
    content: "Logic is the beginning of wisdom, not the end.",
    author: "Leonard Nimoy",
    tags: ["wisdom"],
    authorId: "WTcob-0b_G",
    authorSlug: "leonard-nimoy",
    length: 46,
  },
  {
    _id: "0PnL1GPc2muX",
    content:
      "The greatest good you can do for another is not just share your riches, but reveal to them their own.",
    author: "Benjamin Disraeli",
    tags: ["famous-quotes"],
    authorId: "xAJjt7yV9kyd",
    authorSlug: "benjamin-disraeli",
    length: 101,
  },
  {
    _id: "u5VbhYCVo5Jz",
    content:
      "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody.",
    author: "Herbert Bayard Swope",
    tags: ["famous-quotes"],
    authorId: "n4zQiBQc-Ifw",
    authorSlug: "herbert-bayard-swope",
    length: 121,
  },
  {
    _id: "BsZbjg9hrAVI",
    content:
      "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.",
    author: "Epictetus",
    tags: ["famous-quotes"],
    authorId: "HZHaUuiyIJPp",
    authorSlug: "epictetus",
    length: 117,
  },
  {
    _id: "c6xalG3uXL4n",
    content:
      "Imagination is the living power and prime agent of all human perception.",
    author: "Samuel Taylor Coleridge",
    tags: ["famous-quotes"],
    authorId: "LAOTQVvhPNFp",
    authorSlug: "samuel-taylor-coleridge",
    length: 72,
  },
  {
    _id: "Q0q53LrtbHm0",
    content: "Those that know, do. Those that understand, teach.",
    author: "Aristotle",
    tags: ["famous-quotes"],
    authorId: "Z8j-PYl90GLF",
    authorSlug: "aristotle",
    length: 50,
  },
  {
    _id: "ComoDwgAEY2",
    content:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
    author: "J. Willard Marriott",
    tags: ["famous-quotes"],
    authorId: "v7osO_Koh9Ik",
    authorSlug: "j-willard-marriott",
    length: 83,
  },
  {
    _id: "Dqqwo96Tximg",
    content:
      "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.",
    author: "Oliver Wendell Holmes Jr.",
    tags: ["famous-quotes"],
    authorId: "qa_R4Oc97JXq",
    authorSlug: "oliver-wendell-holmes-jr",
    length: 124,
  },
  {
    _id: "V7HF0nCuOodn",
    content:
      "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
    author: "Melody Beattie",
    tags: ["famous-quotes"],
    authorId: "_rCUwICbu1j2",
    authorSlug: "melody-beattie",
    length: 93,
  },
  {
    _id: "ISX_zfx8abzc",
    content:
      "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
    author: "Robert Louis Stevenson",
    tags: ["famous-quotes"],
    authorId: "qKwGWW8zDYtf",
    authorSlug: "robert-louis-stevenson",
    length: 117,
  },
  {
    _id: "6Kl3UT6ULk",
    content:
      "Wisdom, compassion, and courage are the three universally recognized moral qualities of men.",
    author: "Confucius",
    tags: ["wisdom"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 92,
  },
  {
    _id: "0FJtHaraIRKe",
    content: "We shall never know all the good that a simple smile can do.",
    author: "Mother Teresa",
    tags: ["famous-quotes"],
    authorId: "y7OXxqCaXKVa",
    authorSlug: "mother-teresa",
    length: 60,
  },
  {
    _id: "h3vqfIeuhcho",
    content: "The best thing in every noble dream is the dreamer...",
    author: "Moncure D. Conway",
    tags: ["famous-quotes"],
    authorId: "ZpPm6ZTW9GLu",
    authorSlug: "moncure-d-conway",
    length: 53,
  },
  {
    _id: "hUUF65Y82g7",
    content: "Life shrinks or expands in proportion to one's courage.",
    author: "Anaïs Nin",
    tags: ["famous-quotes"],
    authorId: "MMvH-cw49Y9t",
    authorSlug: "anais-nin",
    length: 55,
  },
  {
    _id: "y1RIkUSWFpl",
    content: "The greatest remedy for anger is delay.",
    author: "Seneca the Younger",
    tags: ["famous-quotes"],
    authorId: "TyeFCuRgEQjD",
    authorSlug: "seneca-the-younger",
    length: 39,
  },
  {
    _id: "ehBmRJ9WwXKK",
    content:
      "A garden is always a series of losses set against a few triumphs, like life itself.",
    author: "May Sarton",
    tags: ["famous-quotes"],
    authorId: "aLFrwqpJQ9zs",
    authorSlug: "may-sarton",
    length: 83,
  },
  {
    _id: "t7STDz8m6QIp",
    content: "The wisest men follow their own direction.",
    author: "Euripides",
    tags: ["famous-quotes"],
    authorId: "yVMYpy-GWWFq",
    authorSlug: "euripides",
    length: 42,
  },
  {
    _id: "lvcJukDLhxz3",
    content:
      "The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems.",
    author: "Mahatma Gandhi",
    tags: ["famous-quotes"],
    authorId: "4J6_dx73YbT5",
    authorSlug: "mahatma-gandhi",
    length: 118,
  },
  {
    _id: "COOYD278-JAr",
    content:
      "The superior man is modest in his speech, but exceeds in his actions.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 69,
  },
  {
    _id: "XQKtTxtLnshu",
    content:
      "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    author: "Barack Obama",
    tags: ["famous-quotes"],
    authorId: "Xt2CsBHup4NB",
    authorSlug: "barack-obama",
    length: 145,
  },
  {
    _id: "IxrwsheO2w6",
    content: "Wherever you go, go with all your heart.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 40,
  },
  {
    _id: "g4URs5hS3Taq",
    content:
      "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.",
    author: "George Bernard Shaw",
    tags: ["famous-quotes"],
    authorId: "zKfoVjq84t9O",
    authorSlug: "george-bernard-shaw",
    length: 106,
  },
  {
    _id: "IROEi_B-5kj",
    content:
      "If you set out to be liked, you would be prepared to compromise on anything at any time, and you would achieve nothing.",
    author: "Margaret Thatcher",
    tags: ["wisdom"],
    authorId: "WVe0z8ZowG",
    authorSlug: "margaret-thatcher",
    length: 119,
  },
  {
    _id: "t3KpUGU3apks",
    content: "Be like the flower, turn your face to the sun.",
    author: "Kahlil Gibran",
    tags: ["famous-quotes"],
    authorId: "h05GYnKzckM3",
    authorSlug: "kahlil-gibran",
    length: 46,
  },
  {
    _id: "N6l6bDDcBP",
    content: "Friendship multiplies the good of life and divides the evil.",
    author: "Baltasar Gracián",
    tags: ["friendship"],
    authorId: "NOw0qSU2RzF5",
    authorSlug: "baltasar-gracian",
    length: 60,
  },
  {
    _id: "SQxIxT9EoucK",
    content: "Kindness is the golden chain by which society is bound together.",
    author: "Johann Wolfgang von Goethe",
    tags: ["famous-quotes"],
    authorId: "aW1ZR-8LuS28",
    authorSlug: "johann-wolfgang-von-goethe",
    length: 64,
  },
  {
    _id: "ay74-DkPYiOq",
    content:
      "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
    author: "Thích Nhất Hạnh",
    tags: ["famous-quotes"],
    authorId: "N0pHADD097gY",
    authorSlug: "thich-nhất-hạnh",
    length: 103,
  },
  {
    _id: "amF1FDsLD6",
    content: "A friend is someone who gives you total freedom to be yourself.",
    author: "Jim Morrison",
    tags: ["friendship"],
    authorId: "Rt3UK3h72",
    authorSlug: "jim-morrison",
    length: 63,
  },
  {
    _id: "eWtR9nXnZ",
    content:
      "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    author: "Laozi",
    tags: ["inspirational"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 150,
  },
  {
    _id: "VHFFYD5KcXN6",
    content:
      "I have done my best: that is about all the philosophy of living one needs.",
    author: "Lin Yutang",
    tags: ["famous-quotes"],
    authorId: "99cr5SHT23eb",
    authorSlug: "lin-yutang",
    length: 74,
  },
  {
    _id: "oQnbzQ_W0gJS",
    content: "Never mistake motion for action.",
    author: "Ernest Hemingway",
    tags: ["famous-quotes"],
    authorId: "QEUcQP7NFqk7",
    authorSlug: "ernest-hemingway",
    length: 32,
  },
  {
    _id: "8IyWC1hl--Je",
    content:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 90,
  },
  {
    _id: "8TXdurkixxgm",
    content:
      "Ask yourself the secret of your success. Listen to your answer, and practice it.",
    author: "Richard Bach",
    tags: ["famous-quotes"],
    authorId: "t9lNqDH0TmYo",
    authorSlug: "richard-bach",
    length: 80,
  },
  {
    _id: "-ZfnGHueyp",
    content:
      "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",
    author: "Archimedes",
    tags: ["wisdom"],
    authorId: "vKwA_aAsd",
    authorSlug: "archimedes",
    length: 91,
  },
  {
    _id: "NN3kZRTt4V",
    content: "Holy wisdom confounds Satan and all his wickednesses.",
    author: "Francis of Assisi",
    tags: ["wisdom"],
    authorId: "axdVU-ILRg-V",
    authorSlug: "francis-of-assisi",
    length: 53,
  },
  {
    _id: "0I3MzxBI2Cyo",
    content:
      "Life is a succession of lessons, which must be lived to be understood.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 70,
  },
  {
    _id: "x4gbVTU0f3TW",
    content:
      "The only limit to your impact is your imagination and commitment.",
    author: "Tony Robbins",
    tags: ["famous-quotes"],
    authorId: "IkUGwHTcaXs9",
    authorSlug: "tony-robbins",
    length: 65,
  },
  {
    _id: "R80GBolDfAev",
    content:
      "Life is like a sewer. What you get out of it depends on what you put into it.",
    author: "Tom Lehrer",
    tags: ["famous-quotes"],
    authorId: "Gfzo6r8aTiV0",
    authorSlug: "tom-lehrer",
    length: 77,
  },
  {
    _id: "D_S3tmLBb8",
    content:
      "A man must be big enough to admit his mistakes, smart enough to profit from them, and strong enough to correct them.",
    author: "John C. Maxwell",
    tags: ["wisdom"],
    authorId: "kq5XYblNhYOH",
    authorSlug: "john-c-maxwell",
    length: 116,
  },
  {
    _id: "p8BRVIq75p-D",
    content:
      "If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.",
    author: "Mary Pickford",
    tags: ["famous-quotes"],
    authorId: "9bUEqH8C5ewT",
    authorSlug: "mary-pickford",
    length: 116,
  },
  {
    _id: "ahrACwvb84Z4",
    content:
      "I want you to be everything that's you, deep at the center of your being.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 73,
  },
  {
    _id: "-DUavsjRcctX",
    content: "Can you imagine what I would do if I could do all I can?",
    author: "Sun Tzu",
    tags: ["famous-quotes"],
    authorId: "G-QcoRJkxKHQ",
    authorSlug: "sun-tzu",
    length: 56,
  },
  {
    _id: "MFFCMyuycWf",
    content:
      "May our hearts garden of awakening bloom with hundreds of flowers.",
    author: "Thích Nhất Hạnh",
    tags: ["famous-quotes"],
    authorId: "N0pHADD097gY",
    authorSlug: "thich-nhất-hạnh",
    length: 66,
  },
  {
    _id: "u80cGRXHeCeH",
    content:
      "When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 122,
  },
  {
    _id: "qgRPI2mMJRZv",
    content:
      "A man who doesn't trust himself can never really trust anyone else.",
    author: "Jean François Paul de Gondi",
    tags: ["famous-quotes"],
    authorId: "Ch_fdSLdPZCo",
    authorSlug: "jean-francois-paul-de-gondi",
    length: 67,
  },
  {
    _id: "H_FnIEJXHrGU",
    content:
      "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
    author: "Wayne Dyer",
    tags: ["famous-quotes"],
    authorId: "CLxflG5QMMjg",
    authorSlug: "wayne-dyer",
    length: 114,
  },
  {
    _id: "AKE0_H6LR05G",
    content: "Our lives are a sum total of the choices we have made.",
    author: "Wayne Dyer",
    tags: ["famous-quotes"],
    authorId: "CLxflG5QMMjg",
    authorSlug: "wayne-dyer",
    length: 54,
  },
  {
    _id: "eJ2Odi1UbNvj",
    content:
      "It is on our failures that we base a new and different and better success.",
    author: "Havelock Ellis",
    tags: ["famous-quotes"],
    authorId: "sZYcfd1P_aHz",
    authorSlug: "havelock-ellis",
    length: 74,
  },
  {
    _id: "gO2rEcTrwLo7",
    content: "When fate hands us a lemon, lets try to make lemonade.",
    author: "Dale Carnegie",
    tags: ["famous-quotes"],
    authorId: "D1RNG5b9TsXN",
    authorSlug: "dale-carnegie",
    length: 54,
  },
  {
    _id: "FO4v4ZdByU",
    content:
      "A man cannot be said to succeed in this life who does not satisfy one friend.",
    author: "Henry David Thoreau",
    tags: ["friendship"],
    authorId: "NrthgQlym1Ji",
    authorSlug: "henry-david-thoreau",
    length: 77,
  },
  {
    _id: "3Jk60HlbZFu9",
    content:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "Harriet Tubman",
    tags: ["famous-quotes"],
    authorId: "_z5JX-jIyYsz",
    authorSlug: "harriet-tubman",
    length: 165,
  },
  {
    _id: "0lnHVeiNr0un",
    content:
      "They must often change, who would be constant in happiness or wisdom.",
    author: "Confucius",
    tags: ["famous-quotes", "wisdom"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 69,
  },
  {
    _id: "Ov1F2nueFuMN",
    content: "Silence is a source of great strength.",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 38,
  },
  {
    _id: "Aya0eLpghjxG",
    content:
      "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.",
    author: "Mortimer J. Adler",
    tags: ["famous-quotes"],
    authorId: "tjrclR27CkGm",
    authorSlug: "mortimer-j-adler",
    length: 113,
  },
  {
    _id: "Qkl55U0twCr",
    content: "Don't cry because it's over. Smile because it happened.",
    author: "Dr. Seuss",
    tags: ["famous-quotes"],
    authorId: "oHmf28pJEUHo",
    authorSlug: "dr-seuss",
    length: 55,
  },
  {
    _id: "p3WMuYECz33S",
    content:
      "The meaning I picked, the one that changed my life: Overcome fear, behold wonder.",
    author: "Richard Bach",
    tags: ["famous-quotes"],
    authorId: "t9lNqDH0TmYo",
    authorSlug: "richard-bach",
    length: 81,
  },
  {
    _id: "yzPY72AXGkD",
    content: "The cause is hidden. The effect is visible to all.",
    author: "Ovid",
    tags: ["famous-quotes"],
    authorId: "f9utPohz0fgH",
    authorSlug: "ovid",
    length: 50,
  },
  {
    _id: "fAyIjkZePx",
    content:
      "He who learns must suffer. And even in our sleep pain that cannot forget falls drop by drop upon the heart, and in our own despair, against our will, comes wisdom to us by the awful grace of God.",
    author: "Aeschylus",
    tags: ["wisdom"],
    authorId: "ossJxB6-1",
    authorSlug: "aeschylus",
    length: 195,
  },
  {
    _id: "PnQ8g2gz_sY2",
    content: "I never worry about action, but only inaction.",
    author: "Winston Churchill",
    tags: ["famous-quotes"],
    authorId: "FEM0nF4bj5r7",
    authorSlug: "winston-churchill",
    length: 46,
  },
  {
    _id: "SBqsC7DOKoC0",
    content:
      "At the center of your being you have the answer; you know who you are and you know what you want.",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 97,
  },
  {
    _id: "ykXP-CFk_G",
    content:
      "If you're trying to achieve, there will be roadblocks. I've had them; everybody has had them. But obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.",
    author: "Michael Jordan",
    tags: ["wisdom", "inspirational"],
    authorId: "XU7cPmNoohKd",
    authorSlug: "michael-jordan",
    length: 248,
  },
  {
    _id: "5lsIG8ZCgvy4",
    content:
      "You will not be punished for your anger, you will be punished by your anger.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 76,
  },
  {
    _id: "NcBJY-YJ58W",
    content: "Problems are only opportunities with thorns on them.",
    author: "Hugh Miller",
    tags: ["famous-quotes"],
    authorId: "ZYuzRDdhCJIh",
    authorSlug: "hugh-miller",
    length: 52,
  },
  {
    _id: "oyagVQRGL7",
    content:
      "Forgiveness is that subtle thread that binds both love and friendship. Without forgiveness, you may not even have a child one day.",
    author: "George Foreman",
    tags: ["friendship"],
    authorId: "3RxG2j5eRN",
    authorSlug: "george-foreman",
    length: 130,
  },
  {
    _id: "NQwosr41uhx0",
    content:
      "We cannot do everything at once, but we can do something at once.",
    author: "Calvin Coolidge",
    tags: ["famous-quotes"],
    authorId: "bUWx0bMUCf8X",
    authorSlug: "calvin-coolidge",
    length: 65,
  },
  {
    _id: "BLQOsYJz2jn1",
    content:
      "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health.",
    author: "Dalai Lama",
    tags: ["famous-quotes"],
    authorId: "OPVjtVVBVW5h",
    authorSlug: "dalai-lama",
    length: 121,
  },
  {
    _id: "OawbCWOFWi",
    content:
      "The doorstep to the temple of wisdom is a knowledge of our own ignorance.",
    author: "Benjamin Franklin",
    tags: ["wisdom"],
    authorId: "xkvcrqREjoOB",
    authorSlug: "benjamin-franklin",
    length: 73,
  },
  {
    _id: "eulsh4ijgp",
    content:
      "He is no fool who gives what he cannot keep to gain what he cannot lose.",
    author: "Jim Elliot",
    tags: ["wisdom"],
    authorId: "wlnB5ark0s",
    authorSlug: "jim-elliot",
    length: 72,
  },
  {
    _id: "I8UvAqPYmS",
    content: "Between saying and doing, many a pair of shoes is worn out.",
    author: "Iris Murdoch",
    tags: ["wisdom"],
    authorId: "v2Jk1rHcsGne",
    authorSlug: "iris-murdoch",
    length: 59,
  },
  {
    _id: "AJB3CSbvVFm",
    content: "If the shoe doesn't fit, must we change the foot?",
    author: "Gloria Steinem",
    tags: ["famous-quotes"],
    authorId: "6T6dO1lyfHYK",
    authorSlug: "gloria-steinem",
    length: 49,
  },
  {
    _id: "yOGaxdDvToGD",
    content: "When you come to the end of your rope, tie a knot and hang on.",
    author: "Franklin D. Roosevelt",
    tags: ["famous-quotes"],
    authorId: "ejqEsEP8JKVz",
    authorSlug: "franklin-d-roosevelt",
    length: 62,
  },
  {
    _id: "1RmEkIqT9Cyn",
    content: "Nothing is at last sacred but the integrity of your own mind.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 61,
  },
  {
    _id: "_mOXeW2AnSF",
    content: "One today is worth two tomorrows.",
    author: "Benjamin Franklin",
    tags: ["famous-quotes"],
    authorId: "xkvcrqREjoOB",
    authorSlug: "benjamin-franklin",
    length: 33,
  },
  {
    _id: "GhOSPuEiMn",
    content: "All of our technology is completely unnecessary to a happy life.",
    author: "Tom Hodgkinson",
    tags: ["technology"],
    authorId: "mkjqOol8P-",
    authorSlug: "tom-hodgkinson",
    length: 64,
  },
  {
    _id: "-wz9LjinT4y9",
    content: "It is fatal to enter any war without the will to win it.",
    author: "Douglas MacArthur",
    tags: ["famous-quotes"],
    authorId: "xquqK-EhBty5",
    authorSlug: "douglas-mac-arthur",
    length: 56,
  },
  {
    _id: "y7YpPYyHzK6",
    content: "Absence makes the heart grow fonder.",
    author: "Thomas Haynes Bayly",
    tags: ["famous-quotes"],
    authorId: "z0LsGNVaG28E",
    authorSlug: "thomas-haynes-bayly",
    length: 36,
  },
  {
    _id: "XlBqWMF7hx5z",
    content:
      "When you judge another, you do not define them, you define yourself.",
    author: "Wayne Dyer",
    tags: ["famous-quotes"],
    authorId: "CLxflG5QMMjg",
    authorSlug: "wayne-dyer",
    length: 68,
  },
  {
    _id: "3qJt6fZmCanr",
    content:
      "Setting an example is not the main means of influencing another, it is the only means.",
    author: "Albert Einstein",
    tags: ["famous-quotes"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 86,
  },
  {
    _id: "gwQJOur7lHXd",
    content: "Always be mindful of the kindness and not the faults of others.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 63,
  },
  {
    _id: "HuuK4BGIf2",
    content:
      "Never reach out your hand unless you're willing to extend an arm.",
    author: "Pope Paul VI",
    tags: ["wisdom"],
    authorId: "lZLSkbMoC0",
    authorSlug: "pope-paul-vi",
    length: 65,
  },
  {
    _id: "UXR4urX1Deim",
    content:
      "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
    author: "Danilo Dolci",
    tags: ["famous-quotes"],
    authorId: "H9V0Xl8JL5Ui",
    authorSlug: "danilo-dolci",
    length: 92,
  },
  {
    _id: "lO_ELfmBRTMq",
    content: "You must do the things you think you cannot do.",
    author: "Eleanor Roosevelt",
    tags: ["famous-quotes"],
    authorId: "1X7NWb1oyd21",
    authorSlug: "eleanor-roosevelt",
    length: 47,
  },
  {
    _id: "Yk5zlxPAS_M7",
    content:
      "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 65,
  },
  {
    _id: "VPGzjvTJI7Uj",
    content:
      "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.",
    author: "Bruce Lee",
    tags: ["famous-quotes"],
    authorId: "raaFe2cXACnG",
    authorSlug: "bruce-lee",
    length: 111,
  },
  {
    _id: "WD1Icqr-7J",
    content:
      "True happiness arises, in the first place, from the enjoyment of one's self, and in the next, from the friendship and conversation of a few select companions.",
    author: "Joseph Addison",
    tags: ["friendship"],
    authorId: "Ra04vOONY8",
    authorSlug: "joseph-addison",
    length: 158,
  },
  {
    _id: "4AZF5nEIPN9",
    content: "To succeed, we must first believe that we can.",
    author: "Michael Korda",
    tags: ["famous-quotes"],
    authorId: "YXZuWxcWpZDE",
    authorSlug: "michael-korda",
    length: 46,
  },
  {
    _id: "t7L2YkK_2QWr",
    content: "As you think, so shall you become.",
    author: "Bruce Lee",
    tags: ["famous-quotes"],
    authorId: "raaFe2cXACnG",
    authorSlug: "bruce-lee",
    length: 34,
  },
  {
    _id: "fXCc-Adzx2i5",
    content:
      "The only real failure in life is not to be true to the best one knows.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 70,
  },
  {
    _id: "2LmdIfvSmBlD",
    content:
      "Before you put on a frown, make absolutely sure there are no smiles available.",
    author: "James M. Beggs",
    tags: ["famous-quotes"],
    authorId: "gyl8VUOxfm2W",
    authorSlug: "james-m-beggs",
    length: 78,
  },
  {
    _id: "JBJV1OZ3ARcw",
    content: "I have no special talent. I am only passionately curious.",
    author: "Albert Einstein",
    tags: ["famous-quotes"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 57,
  },
  {
    _id: "f1aZRYvKb7Ga",
    content:
      "You have to do your own growing no matter how tall your grandfather was.",
    author: "Abraham Lincoln",
    tags: ["famous-quotes", "life", "wisdom"],
    authorId: "8k75S1ntV9GW",
    authorSlug: "abraham-lincoln",
    length: 72,
  },
  {
    _id: "Y_UmXWJD0al",
    content: "Life is movement-we breathe, we eat, we walk, we move!",
    author: "John Pierrakos",
    tags: ["famous-quotes"],
    authorId: "Sk1xgdhktB-8",
    authorSlug: "john-pierrakos",
    length: 54,
  },
  {
    _id: "y1yjB7RbU_Aq",
    content:
      "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes",
    tags: ["famous-quotes"],
    authorId: "j63fSK3zuMaj",
    authorSlug: "demosthenes",
    length: 65,
  },
  {
    _id: "CrSk004mchGX",
    content: "What you do not want done to yourself, do not do to others.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 59,
  },
  {
    _id: "IPv8r6n1dC",
    content: "The smallest deed is better than the greatest intention.",
    author: "John Burroughs",
    tags: ["wisdom"],
    authorId: "7mJtbQOga9",
    authorSlug: "john-burroughs",
    length: 56,
  },
  {
    _id: "TdIyDe0XX542",
    content:
      "Learning without reflection is a waste, reflection without learning is dangerous.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 81,
  },
  {
    _id: "kYh28vSUa2CE",
    content:
      "Successful people ask better questions, and as a result, they get better answers.",
    author: "Tony Robbins",
    tags: ["famous-quotes"],
    authorId: "IkUGwHTcaXs9",
    authorSlug: "tony-robbins",
    length: 81,
  },
  {
    _id: "1crYPFXZKUuv",
    content:
      "Blessed is the man who expects nothing, for he shall never be disappointed.",
    author: "Alexander Pope",
    tags: ["famous-quotes"],
    authorId: "_gz-cfmqA1mr",
    authorSlug: "alexander-pope",
    length: 75,
  },
  {
    _id: "4XsKZeLAUwZ6",
    content:
      "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.",
    author: "William Shakespeare",
    tags: ["famous-quotes"],
    authorId: "5F2Uwpllj",
    authorSlug: "william-shakespeare",
    length: 114,
  },
  {
    _id: "XxIfXFcublTz",
    content:
      "Be faithful in small things because it is in them that your strength lies.",
    author: "Mother Teresa",
    tags: ["famous-quotes"],
    authorId: "y7OXxqCaXKVa",
    authorSlug: "mother-teresa",
    length: 74,
  },
  {
    _id: "c2crwHSzalPu",
    content:
      "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
    author: "William Ellery Channing",
    tags: ["famous-quotes", "inspirational", "power-quotes"],
    authorId: "gli4tf73TPql",
    authorSlug: "william-ellery-channing",
    length: 96,
  },
  {
    _id: "82Ucdsd1amiC",
    content: "Anybody can make history. Only a great man can write it.",
    author: "Oscar Wilde",
    tags: ["famous-quotes"],
    authorId: "yw5O7wULaKfx",
    authorSlug: "oscar-wilde",
    length: 56,
  },
  {
    _id: "iCcV8TjAAZ71",
    content:
      "Doing what you love is the cornerstone of having abundance in your life.",
    author: "Wayne Dyer",
    tags: ["famous-quotes"],
    authorId: "CLxflG5QMMjg",
    authorSlug: "wayne-dyer",
    length: 72,
  },
  {
    _id: "hSxHK-iwap5",
    content: "No alibi will save you from accepting the responsibility.",
    author: "Napoleon Hill",
    tags: ["famous-quotes"],
    authorId: "N4h708MyElyG",
    authorSlug: "napoleon-hill",
    length: 57,
  },
  {
    _id: "a7lEejDkHdFL",
    content:
      "Everything you are against weakens you. Everything you are for empowers you.",
    author: "Wayne Dyer",
    tags: ["famous-quotes"],
    authorId: "CLxflG5QMMjg",
    authorSlug: "wayne-dyer",
    length: 76,
  },
  {
    _id: "zDV7RR6Y-wvZ",
    content:
      "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 128,
  },
  {
    _id: "mhBblBxFy-nH",
    content:
      "The world is round and the place which may seem like the end may also be the beginning.",
    author: "Ivy Baker Priest",
    tags: ["famous-quotes"],
    authorId: "CJxFJUe5dF3J",
    authorSlug: "ivy-baker-priest",
    length: 87,
  },
  {
    _id: "SPqg3-WqniZ",
    content:
      "I'd rather regret the things I've done than regret the things I haven't done.",
    author: "Lucille Ball",
    tags: ["wisdom"],
    authorId: "Ub_gH1IJ-HBm",
    authorSlug: "lucille-ball",
    length: 77,
  },
  {
    _id: "b1idr5ua4wW",
    content:
      "There is more wisdom in your body than in your deepest philosophy.",
    author: "Friedrich Nietzsche",
    tags: ["wisdom"],
    authorId: "g-zHV1myc_8Y",
    authorSlug: "friedrich-nietzsche",
    length: 66,
  },
  {
    _id: "MLmhf5Scxikl",
    content: "Time stays long enough for anyone who will use it.",
    author: "Leonardo da Vinci",
    tags: ["famous-quotes"],
    authorId: "v-beNXVk_I9v",
    authorSlug: "leonardo-da-vinci",
    length: 50,
  },
  {
    _id: "Aj1hWd83aS",
    content:
      "It is only the great hearted who can be true friends. The mean and cowardly, Can never know what true friendship means.",
    author: "Charles Kingsley",
    tags: ["friendship"],
    authorId: "eDH_-mE56",
    authorSlug: "charles-kingsley",
    length: 119,
  },
  {
    _id: "APsci40ULi",
    content:
      "Technology frightens me to death. It’s designed by engineers to impress other engineers. And they always come with instruction booklets that are written by engineers for other engineers — which is why almost no technology ever works.",
    author: "John Cleese",
    tags: ["technology"],
    authorId: "rp-2AvtbZ",
    authorSlug: "john-cleese",
    length: 233,
  },
  {
    _id: "sKRDFZR86R5",
    content:
      "I never see what has been done; I only see what remains to be done.",
    author: "Marie Curie",
    tags: ["famous-quotes"],
    authorId: "Ayk4hyEX7Qbu",
    authorSlug: "marie-curie",
    length: 67,
  },
  {
    _id: "4gJgNXPzK5",
    content:
      "Even if you're on the right track, you'll get run over if you just sit there.",
    author: "Will Rogers",
    tags: ["wisdom"],
    authorId: "7HShv87qgca6",
    authorSlug: "will-rogers",
    length: 77,
  },
  {
    _id: "RnCP5T-HzwbJ",
    content:
      "If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.",
    author: "Anne Bradstreet",
    tags: ["famous-quotes"],
    authorId: "hFlcETvnSTsM",
    authorSlug: "anne-bradstreet",
    length: 137,
  },
  {
    _id: "IQyVmjKCY1",
    content: "All human wisdom is summed up in two words; wait and hope.",
    author: "Alexandre Dumas",
    tags: ["wisdom"],
    authorId: "9r41Szdxzw",
    authorSlug: "alexandre-dumas",
    length: 58,
  },
  {
    _id: "19XnsDE_kpQq",
    content:
      "You cannot step twice into the same river, for other waters are continually flowing in.",
    author: "Heraclitus",
    tags: ["famous-quotes"],
    authorId: "4JthmAKT69gP",
    authorSlug: "heraclitus",
    length: 87,
  },
  {
    _id: "kq_R7P1iSIm3",
    content: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    tags: ["famous-quotes", "inspirational"],
    authorId: "zbADvkP0r05L",
    authorSlug: "mark-twain",
    length: 47,
  },
  {
    _id: "4vBDcA9H-kG",
    content:
      "No distance of place or lapse of time can lessen the friendship of those who are thoroughly persuaded of each other's worth.",
    author: "Robert Southey",
    tags: ["friendship"],
    authorId: "PPovMPyVTCuc",
    authorSlug: "robert-southey",
    length: 124,
  },
  {
    _id: "AEocdFfGOhyx",
    content: "What we see depends mainly on what we look for.",
    author: "John Lubbock",
    tags: ["famous-quotes"],
    authorId: "UzFWyAKPulk8",
    authorSlug: "john-lubbock",
    length: 47,
  },
  {
    _id: "bTpqZkd3K7",
    content:
      "Knowledge is going to make you stronger. Knowledge is going to let you control your life. Knowledge is going to give you the wisdom to teach their children. Knowledge is the thing that makes you smile in the face of disaster.",
    author: "Avery Brooks",
    tags: ["wisdom"],
    authorId: "oTy9bo88X7",
    authorSlug: "avery-brooks",
    length: 225,
  },
  {
    _id: "8OBH14kq2G",
    content:
      "Neatness begets order; but from order to taste there is the same difference as from taste to genius, or from love to friendship.",
    author: "Johann Kaspar Lavater",
    tags: ["friendship"],
    authorId: "zpMINfv_ur",
    authorSlug: "johann-kaspar-lavater",
    length: 128,
  },
  {
    _id: "0mvbtxiIrRtQ",
    content: "When I let go of what I am, I become what I might be.",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 53,
  },
  {
    _id: "o6XQ_Gzhxg",
    content:
      "One's friends are that part of the human race with which one can be human.",
    author: "George Santayana",
    tags: ["friendship"],
    authorId: "EeYA_JAo0Iix",
    authorSlug: "george-santayana",
    length: 74,
  },
  {
    _id: "B9UxMLiqU9H8",
    content:
      "Beware of missing chances; otherwise it may be altogether too late some day.",
    author: "Franz Liszt",
    tags: ["famous-quotes"],
    authorId: "3Ye538voL0N2",
    authorSlug: "franz-liszt",
    length: 76,
  },
  {
    _id: "B4VtMmx3gG",
    content:
      "Wisdom is the power to put our time and our knowledge to the proper use.",
    author: "Thomas J. Watson",
    tags: ["wisdom"],
    authorId: "rDbLO_FIvo",
    authorSlug: "thomas-j-watson",
    length: 72,
  },
  {
    _id: "iXtSYIGVbm",
    content:
      "The strong bond of friendship is not always a balanced equation; friendship is not always about giving and taking in equal shares. Instead, friendship is grounded in a feeling that you know exactly who will be there for you when you need something, no matter what or when.",
    author: "Simon Sinek",
    tags: ["friendship"],
    authorId: "cvjhiGNS4",
    authorSlug: "simon-sinek",
    length: 272,
  },
  {
    _id: "nv5eWGaFe892",
    content:
      "I think somehow we learn who we really are and then live with that decision.",
    author: "Eleanor Roosevelt",
    tags: ["famous-quotes"],
    authorId: "1X7NWb1oyd21",
    authorSlug: "eleanor-roosevelt",
    length: 76,
  },
  {
    _id: "Fg4uCgQpOYMw",
    content:
      "This is the final test of a gentleman: his respect for those who can be of no possible value to him.",
    author: "William Lyon Phelps",
    tags: ["famous-quotes"],
    authorId: "uEcdD9tO9Xy1",
    authorSlug: "william-lyon-phelps",
    length: 100,
  },
  {
    _id: "nkftU-0YuUP6",
    content:
      "Courage is not the absence of fear, but simply moving on with dignity despite that fear.",
    author: "Pat Riley",
    tags: ["famous-quotes"],
    authorId: "JENVe-QuUSP8",
    authorSlug: "pat-riley",
    length: 88,
  },
  {
    _id: "Zbd2FOmfMJVJ",
    content:
      "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.",
    author: "Nelson Mandela",
    tags: ["famous-quotes"],
    authorId: "ubn8tDLlaqk6",
    authorSlug: "nelson-mandela",
    length: 118,
  },
  {
    _id: "l3-XvfRVtd",
    content:
      "Let my skin and sinews and bones dry up, together with all the flesh and blood of my body! I welcome it! But I will not move from this spot until I have attained the supreme and final wisdom.",
    author: "Buddha",
    tags: ["wisdom"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 191,
  },
  {
    _id: "wkkqY5x5kia3",
    content:
      "There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.",
    author: "Mark Twain",
    tags: ["famous-quotes"],
    authorId: "zbADvkP0r05L",
    authorSlug: "mark-twain",
    length: 153,
  },
  {
    _id: "3tXfdExB8jB",
    content: "From error to error one discovers the entire truth.",
    author: "Sigmund Freud",
    tags: ["famous-quotes"],
    authorId: "S2-JbY3NzItd",
    authorSlug: "sigmund-freud",
    length: 51,
  },
  {
    _id: "QEJsaQ4DbY-v",
    content:
      "I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever.",
    author: "Amy Tan",
    tags: ["famous-quotes"],
    authorId: "PP1Z6EiXO-8z",
    authorSlug: "amy-tan",
    length: 145,
  },
  {
    _id: "vuGBuD1oaev3",
    content:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes", "wisdom"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 87,
  },
  {
    _id: "CwRoiaY5uW8",
    content: "No snowflake in an avalanche ever feels responsible.",
    author: "Voltaire",
    tags: ["famous-quotes"],
    authorId: "ZyuVXKFVTZu8",
    authorSlug: "voltaire",
    length: 52,
  },
  {
    _id: "GzemxoxHgF2P",
    content:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people.",
    author: "Daisaku Ikeda",
    tags: ["famous-quotes"],
    authorId: "f4Q5BtDWomhv",
    authorSlug: "daisaku-ikeda",
    length: 117,
  },
  {
    _id: "5ujpXxYvGfQp",
    content: "Wrinkles should merely indicate where smiles have been.",
    author: "Mark Twain",
    tags: ["famous-quotes"],
    authorId: "zbADvkP0r05L",
    authorSlug: "mark-twain",
    length: 55,
  },
  {
    _id: "Xof9SNxItD8Y",
    content:
      "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe.",
    author: "Winston Churchill",
    tags: ["famous-quotes"],
    authorId: "FEM0nF4bj5r7",
    authorSlug: "winston-churchill",
    length: 172,
  },
  {
    _id: "RP2z5Ir_xwF2",
    content:
      "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
    author: "William Arthur Ward",
    tags: ["famous-quotes", "friendship", "self-help"],
    authorId: "BbtbIJLprBVl",
    authorSlug: "william-arthur-ward",
    length: 88,
  },
  {
    _id: "RrK_kU3Fjf0",
    content: "Yesterdays home runs don't win today's games.",
    author: "Babe Ruth",
    tags: ["famous-quotes"],
    authorId: "mYsdhXSSb8Ib",
    authorSlug: "babe-ruth",
    length: 45,
  },
  {
    _id: "YB-FRt_brC",
    content:
      "Wisdom and penetration are the fruit of experience, not the lessons of retirement and leisure. Great necessities call out great virtues.",
    author: "Abigail Adams",
    tags: ["wisdom"],
    authorId: "82zk1b45Zn",
    authorSlug: "abigail-adams",
    length: 136,
  },
  {
    _id: "RXBrRJcq1Cih",
    content:
      "One must be fond of people and trust them if one is not to make a mess of life.",
    author: "E. M. Forster",
    tags: ["famous-quotes"],
    authorId: "CTr4ZRc1dWiP",
    authorSlug: "e-m-forster",
    length: 79,
  },
  {
    _id: "dyPLKxIFG-Sq",
    content: "The only journey is the one within.",
    author: "Rainer Maria Rilke",
    tags: ["famous-quotes"],
    authorId: "IyvPT1P373DE",
    authorSlug: "rainer-maria-rilke",
    length: 35,
  },
  {
    _id: "rAIJZHn5TH",
    content:
      "The differences between friends cannot but reinforce their friendship.",
    author: "Mao Zedong",
    tags: ["friendship"],
    authorId: "yIXUbkUQAc",
    authorSlug: "mao-zedong",
    length: 70,
  },
  {
    _id: "tVqHnTXq3bDN",
    content:
      "It is one of the blessings of old friends that you can afford to be stupid with them.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes", "friendship"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 85,
  },
  {
    _id: "d1a0cFxEb8Ng",
    content:
      "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    author: "Henry Miller",
    tags: ["famous-quotes"],
    authorId: "baiPlUQWl8I-",
    authorSlug: "henry-miller",
    length: 126,
  },
  {
    _id: "A5l8yCGO4BL5",
    content:
      "Forgiveness is choosing to love. It is the first skill of self-giving love.",
    author: "Mahatma Gandhi",
    tags: ["famous-quotes"],
    authorId: "4J6_dx73YbT5",
    authorSlug: "mahatma-gandhi",
    length: 75,
  },
  {
    _id: "0Cel0Uy3XC",
    content:
      "If a man does not make new acquaintances as he advances through life, he will soon find himself left alone. A man, sir, should keep his friendship in a constant repair.",
    author: "Samuel Johnson",
    tags: ["friendship"],
    authorId: "Nimgtrtvfbyx",
    authorSlug: "samuel-johnson",
    length: 168,
  },
  {
    _id: "U50kYf5u3f4B",
    content:
      "Life's most persistent and urgent question is, 'What are you doing for others?'",
    author: "Martin Luther King Jr.",
    tags: ["famous-quotes"],
    authorId: "Af6UJFdH4IwV",
    authorSlug: "martin-luther-king-jr",
    length: 79,
  },
  {
    _id: "TxvV88zUrVi3",
    content:
      "Keep silence for the most part, and speak only when you must, and then briefly.",
    author: "Epictetus",
    tags: ["famous-quotes"],
    authorId: "HZHaUuiyIJPp",
    authorSlug: "epictetus",
    length: 79,
  },
  {
    _id: "2OVqy9KVYy3m",
    content:
      "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 90,
  },
  {
    _id: "KfOJkr869PQo",
    content:
      "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
    author: "Ralph Waldo Emerson",
    tags: ["famous-quotes"],
    authorId: "xEVEeQ7m4KQT",
    authorSlug: "ralph-waldo-emerson",
    length: 79,
  },
  {
    _id: "ZxKQ6LZn9nZl",
    content:
      "The world has the habit of making room for the man whose actions show that he knows where he is going.",
    author: "Napoleon Hill",
    tags: ["famous-quotes"],
    authorId: "N4h708MyElyG",
    authorSlug: "napoleon-hill",
    length: 102,
  },
  {
    _id: "T6AMWsNRE5",
    content: "Any sufficiently advanced technology is equivalent to magic.",
    author: "Arthur C. Clarke",
    tags: ["technology"],
    authorId: "1QYR63wh3",
    authorSlug: "arthur-c-clarke",
    length: 60,
  },
  {
    _id: "LVmRBE6cytXv",
    content:
      "Reason and free inquiry are the only effectual agents against error.",
    author: "Thomas Jefferson",
    tags: ["famous-quotes"],
    authorId: "Zy4xV5ItRxmv",
    authorSlug: "thomas-jefferson",
    length: 68,
  },
  {
    _id: "Z5aMw6Z1KFjp",
    content:
      "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.",
    author: "Jessamyn West",
    tags: ["famous-quotes"],
    authorId: "aMST-Uqfik3g",
    authorSlug: "jessamyn-west",
    length: 115,
  },
  {
    _id: "-p4UJJtG2e0g",
    content: "Knowledge rests not upon truth alone, but upon error also.",
    author: "Carl Jung",
    tags: ["famous-quotes"],
    authorId: "-LYBJJujV7RL",
    authorSlug: "carl-jung",
    length: 58,
  },
  {
    _id: "rPhZvCjp1t8J",
    content:
      "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
    author: "Dalai Lama",
    tags: ["famous-quotes"],
    authorId: "OPVjtVVBVW5h",
    authorSlug: "dalai-lama",
    length: 80,
  },
  {
    _id: "VNbPhxpsCQrO",
    content:
      "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
    author: "Eleanor Roosevelt",
    tags: ["famous-quotes"],
    authorId: "1X7NWb1oyd21",
    authorSlug: "eleanor-roosevelt",
    length: 103,
  },
  {
    _id: "aeAPqvNG3",
    content:
      "It is a common experience that a problem difficult at night is resolved in the morning after the committee of sleep has worked on it.",
    author: "John Steinbeck",
    tags: ["wisdom"],
    authorId: "6axtEJVYp2We",
    authorSlug: "john-steinbeck",
    length: 133,
  },
  {
    _id: "dMJ9b4iwZ0Lj",
    content:
      "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.",
    author: "Plutarch",
    tags: ["famous-quotes", "wisdom"],
    authorId: "fmzBXMuI4lbX",
    authorSlug: "plutarch",
    length: 129,
  },
  {
    _id: "9sm_GJbP-2s_",
    content:
      "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.",
    author: "Thomas Carlyle",
    tags: ["famous-quotes"],
    authorId: "sTK7Nn46drMi",
    authorSlug: "thomas-carlyle",
    length: 140,
  },
  {
    _id: "wIfNy-oDtr",
    content:
      "Friendship needs no words - it is solitude delivered from the anguish of loneliness.",
    author: "Dag Hammarskjöld",
    tags: ["friendship"],
    authorId: "ubzLDheOmG",
    authorSlug: "dag-hammarskjold",
    length: 84,
  },
  {
    _id: "m8q1pMkFz_jV",
    content:
      "Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him.",
    author: "Johann Wolfgang von Goethe",
    tags: ["famous-quotes"],
    authorId: "aW1ZR-8LuS28",
    authorSlug: "johann-wolfgang-von-goethe",
    length: 148,
  },
  {
    _id: "nBSAX0LazBDt",
    content:
      "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
    author: "Albert Einstein",
    tags: ["famous-quotes", "life", "success"],
    authorId: "L76FRuEeGIUJ",
    authorSlug: "albert-einstein",
    length: 111,
  },
  {
    _id: "DZA5UWkbv-KJ",
    content:
      "If we could see the miracle of a single flower clearly, our whole life would change.",
    author: "Buddha",
    tags: ["famous-quotes"],
    authorId: "sUNjshHENA05",
    authorSlug: "buddha",
    length: 84,
  },
  {
    _id: "b-zLcfguzkk7",
    content:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Laozi",
    tags: ["famous-quotes"],
    authorId: "qsaptKSHuLDU",
    authorSlug: "laozi",
    length: 100,
  },
  {
    _id: "eDuDLZphbw9c",
    content: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown Jr.",
    tags: ["famous-quotes"],
    authorId: "ZShJOYn-QZ5M",
    authorSlug: "h-jackson-brown-jr",
    length: 59,
  },
  {
    _id: "5MYjs_eBt5",
    content: "Love demands infinitely less than friendship.",
    author: "George Jean Nathan",
    tags: ["friendship"],
    authorId: "SMk7Fb4KTw",
    authorSlug: "george-jean-nathan",
    length: 45,
  },
  {
    _id: "kc_i68XUTzm9",
    content:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee",
    tags: ["famous-quotes"],
    authorId: "raaFe2cXACnG",
    authorSlug: "bruce-lee",
    length: 76,
  },
  {
    _id: "gBdWfRIFkxx4",
    content:
      "The aim of life is self-development. To realize ones nature perfectly - that is what each of us is here for.",
    author: "Oscar Wilde",
    tags: ["famous-quotes"],
    authorId: "yw5O7wULaKfx",
    authorSlug: "oscar-wilde",
    length: 108,
  },
  {
    _id: "rROktmIDga",
    content:
      "And when the world is created, it is created in such a way that those eternal objects of God's loving wisdom become actualities - interacting with one another, relating to God in the finite realm.",
    author: "Rowan Williams",
    tags: ["wisdom"],
    authorId: "k53H3997pN",
    authorSlug: "rowan-williams",
    length: 196,
  },
  {
    _id: "395POpXmel",
    content: "Life has no blessing like a prudent friend.",
    author: "Euripides",
    tags: ["friendship"],
    authorId: "yVMYpy-GWWFq",
    authorSlug: "euripides",
    length: 43,
  },
  {
    _id: "gP3atICYApeI",
    content:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.",
    author: "Helen Keller",
    tags: ["famous-quotes"],
    authorId: "pYjZMId1ilhK",
    authorSlug: "helen-keller",
    length: 130,
  },
  {
    _id: "7C2TU6MIz9o_",
    content:
      "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
    author: "Elizabeth Arden",
    tags: ["famous-quotes"],
    authorId: "6Z2MjNVjOz8H",
    authorSlug: "elizabeth-arden",
    length: 93,
  },
  {
    _id: "EpDrsWX_c6li",
    content: "When people are like each other they tend to like each other.",
    author: "Tony Robbins",
    tags: ["famous-quotes"],
    authorId: "IkUGwHTcaXs9",
    authorSlug: "tony-robbins",
    length: 61,
  },
  {
    _id: "8Lkh3gqcSh",
    content: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
    tags: ["famous-quotes", "inspirational"],
    authorId: "aW1ZR-8LuS28",
    authorSlug: "johann-wolfgang-von-goethe",
    length: 52,
  },
  {
    _id: "3-PoIjz4IDQ",
    content:
      "In life, all good things come hard, but wisdom is the hardest to come by.",
    author: "Lucille Ball",
    tags: ["wisdom"],
    authorId: "Ub_gH1IJ-HBm",
    authorSlug: "lucille-ball",
    length: 73,
  },
  {
    _id: "_k3kxvogAs-6",
    content: "If you have knowledge, let others light their candles in it.",
    author: "Margaret Fuller",
    tags: ["famous-quotes"],
    authorId: "yxcmeo89-BoQ",
    authorSlug: "margaret-fuller",
    length: 60,
  },
  {
    _id: "5_6lVDMuo9IM",
    content: "Happiness can exist only in acceptance.",
    author: "George Orwell",
    tags: ["famous-quotes"],
    authorId: "YyZuhLs2-ki6",
    authorSlug: "george-orwell",
    length: 39,
  },
  {
    _id: "NTseDGDXOuo8",
    content: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    tags: ["famous-quotes"],
    authorId: "ropvZKOXYhLr",
    authorSlug: "confucius",
    length: 62,
  },
  {
    _id: "mZGMxqlkKn",
    content:
      "Friendship may, and often does, grow into love, but love never subsides into friendship.",
    author: "Lord Byron",
    tags: ["friendship"],
    authorId: "EUjr2jc6nT",
    authorSlug: "lord-byron",
    length: 88,
  },
  {
    _id: "0Z8EQaXeVdhX",
    content:
      "Weve got to have a dream if we are going to make a dream come true.",
    author: "Walt Disney",
    tags: ["famous-quotes"],
    authorId: "HzyhMbP15DoD",
    authorSlug: "walt-disney",
    length: 67,
  },
  {
    _id: "heFGlWwPZjvX",
    content:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.",
    author: "Hannah Arendt",
    tags: ["famous-quotes"],
    authorId: "2aVt9AdFu1fK",
    authorSlug: "hannah-arendt",
    length: 139,
  },
  {
    _id: "g1GZtzlspywZ",
    content:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    author: "Dale Carnegie",
    tags: ["famous-quotes"],
    authorId: "D1RNG5b9TsXN",
    authorSlug: "dale-carnegie",
    length: 138,
  },
  {
    _id: "YTqaIDVD0fX3",
    content:
      "The way we communicate with others and with ourselves ultimately determines the quality of our lives.",
    author: "Tony Robbins",
    tags: ["famous-quotes"],
    authorId: "IkUGwHTcaXs9",
    authorSlug: "tony-robbins",
    length: 101,
  },
  {
    _id: "xjRJ2oXvhode",
    content: "Time you enjoyed wasting was not wasted.",
    author: "John Lennon",
    tags: ["famous-quotes"],
    authorId: "vVS5k5Oad9Hy",
    authorSlug: "john-lennon",
    length: 40,
  },
  {
    _id: "M1DjUqEQCO-E",
    content:
      "Never bend your head. Always hold it high. Look the world right in the eye.",
    author: "Helen Keller",
    tags: ["famous-quotes"],
    authorId: "pYjZMId1ilhK",
    authorSlug: "helen-keller",
    length: 75,
  },
  {
    _id: "wdTamcKIF6Oc",
    content:
      "All achievements, all earned riches, have their beginning in an idea.",
    author: "Napoleon Hill",
    tags: ["famous-quotes"],
    authorId: "N4h708MyElyG",
    authorSlug: "napoleon-hill",
    length: 69,
  },
  {
    _id: "vmmay0GtEHcT",
    content:
      "The poor man is not he who is without a cent, but he who is without a dream.",
    author: "Harry Kemp",
    tags: ["famous-quotes"],
    authorId: "jFYtDAg5Ott5",
    authorSlug: "harry-kemp",
    length: 76,
  },
  {
    _id: "0IP2kpOHSiPj",
    content: "I have never been hurt by anything I didn't say.",
    author: "Calvin Coolidge",
    tags: ["famous-quotes"],
    authorId: "bUWx0bMUCf8X",
    authorSlug: "calvin-coolidge",
    length: 48,
  },
  {
    _id: "FO7XX9krDFzO",
    content:
      "Every artist dips his brush in his own soul, and paints his own nature into his pictures.",
    author: "Henry Ward Beecher",
    tags: ["famous-quotes"],
    authorId: "7ARdGK2SnqLv",
    authorSlug: "henry-ward-beecher",
    length: 89,
  },
  {
    _id: "5_zuctgLXl8x",
    content:
      "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
    author: "Margaret Chase Smith",
    tags: ["famous-quotes"],
    authorId: "TtcYr-YE0YpM",
    authorSlug: "margaret-chase-smith",
    length: 128,
  },
  {
    _id: "mH_m-Xmw1dk",
    content: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill",
    tags: ["famous-quotes"],
    authorId: "N4h708MyElyG",
    authorSlug: "napoleon-hill",
    length: 46,
  },
];
// Class declaration
class quote {
  // constructor
  constructor(content, author, tags, length) {
    // instance variables with this
    this.content = content;
    this.author = author;
    this.tags = tags;
    this.length = length;
  }
}

var quotes = new Array();
for (var i in dataset) {
  let aQuote = dataset[i];
  quotes[i] = new quote(
    aQuote.content,
    aQuote.author,
    aQuote.tags,
    aQuote.length
  );
}

// Find the shortest quote
const shortestQuote = () => {
  var result = quotes.reduce(function (prev, curr) {
    return prev.length < curr.length ? prev : curr;
  });
  // template literal
  return `"${result.content}" by ${result.author} with ${result.length} length`;
};

// Find the longest quote
const longestQuote = () => {
  // Arrow function
  var result = quotes.reduce((prev, curr) => {
    return prev.length > curr.length ? prev : curr;
  });

  return `"${result.content}" by ${result.author} with ${result.length} length`;
};

// Find the count of quotes by specific first name
const searchFirstName = (firstName) => {
  // let statement
  let counts = 0;

  // iterate through the qutes
  // for in statement
  for (var i in quotes) {
    var nameArray = new Array();
    if (quotes[i].author) {
      // split first, middle, and last name
      nameArray = quotes[i].author.split(" ");
      // find the match and count
      if (nameArray[0] === firstName) {
        counts++;
      }
    }
  }

  return counts;
};

// Find how many quotes include the specific term
// default value
const searchTerm = (term = "never") => {
  let counts = 0;
  // make search term lowercase
  term = term.toLowerCase();
  // Iterate the quotes' content
  for (var i in quotes) {
    if (quotes[i].content.toLowerCase().includes(term)) {
      counts++;
    }
  }

  return counts;
};

// Find the person who wrote the most quotes
const mostAuthor = () => {
  // Array.map()
  const authors = quotes.map((quote) => quote.author);

  // count
  var countObj = {};
  authors.forEach((i) => {
    countObj[i] = (countObj[i] || 0) + 1;
  });

  // get highest value
  let arr = Object.values(countObj);
  let max = Math.max(...arr);

  // get the key with highest value
  const authorName = Object.keys(countObj).reduce((a, b) =>
    countObj[a] > countObj[b] ? a : b
  );

  return `${authorName} wrote ${max} quotes!`;
};

// Count the frequency of a tag
// deafult value
const frequencyTag = (tagName = '') => {
  // const statement
  const tags = quotes.map((quote) => quote.tags);
  let count = 0;
  
  // for of statement
  for (const tag of tags) {
    if(tag.length > 1){
      // there are more than one tag
      for (var i in tag){
        if(tag[i] === tagName) count++;
      }
    } else {
      if(tag[0] === tagName) count++;
    }    
  }
  return count;
}

// Find the highest usage word
const mostCommonWord = () => {
  const contents = quotes.map((aContent) => aContent.content);
  const words = contents.map((content) => content.split(" "));
  const wordsArray = new Array();

  // make into array of each word in the words object
  for (const word of words) {
    for (const each of word) {
      // make lowercase and remove dot and comma
      wordsArray.push(each.toLowerCase().replace(/[.,\s]/g, ''));
    }
  }
  // filter
  const filterWords = ["the", "is", "to", "of", "you", "and", "a", "in", 
  "not", "that", "your", "be", "are", "we", "for", "i", "what", "have", 
  "do", "but", "who", "it", "can", "will", "our", "as", "with", "by", 
  "he", "only", "if", "no"];

  const filteredArray = wordsArray.filter(
    word => !filterWords.includes(word)
  );

  const counts = {};
  let maxCount = 0;
  let maxElement;
  // count
  for (let i = 0; i < filteredArray.length; i++) {
    const key = filteredArray[i];
    const count = (counts[key] = (counts[key] || 0) + 1);
    if (count > maxCount) {
      maxCount = count;
      maxElement = key;
    }
  }
  return `"${maxElement}" is used ${maxCount} times and it is the most common word in the quotes`;
};

// Calculate the average of length of the quotes
const averageLength = () => {
  // instance of a Map
  let mp = new Map();
  mp.set("lengths", quotes.map((aLength) => aLength.length));

  return average(mp.get("lengths"));
}
// helper function to calculate the average
const average = (array) => {
  return array.reduce((a, b) => a + b) / array.length; 
}


console.log("Q1) What is the shortest quote among the quotes?");
console.log("A) " + shortestQuote());

console.log("Q2) What is the longest quote among the quotes?");
console.log("A) " + longestQuote());

console.log("Q3) How many quotes are written by the first name as George?");
console.log("A) " + searchFirstName("George"));

console.log('Q4) How many quotes contains the word "never"?');
console.log("A) " + searchTerm()); // never is set to default value of this function

console.log("Q5) Who worte the most quotes?");
console.log("A) " + mostAuthor());

console.log("Q6) How many quotes are related to friendship?");
console.log("A) " + frequencyTag("friendship"));

console.log("Q7) What is the most commonly used word in quotes?");
console.log("A) " + mostCommonWord());

console.log("Q8) What is the average length of the quotes?");
console.log("A) " + averageLength());