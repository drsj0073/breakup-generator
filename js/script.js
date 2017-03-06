$(function() {

    var breakupVariations = {
        //FUNNY SECTION STARTS
        "funny": {
            //pet section starts 
            pet: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, it's ${dumperName} - I know we've been dating for a little under 6 months... but my pet doesn't like you. lol, jk - I don't like you. Byeeeeee! #sorrynotsorry`,
                        `Hey ${dumpeeName}, it's ${dumperName} - I know we've been dating for a little under 6 months... but I would rather lay in bed with my fur baby since they are a better cuddler than you. This it's not going to work out. Take care. See you never!`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, it's ${dumperName} - I know we've been dating for a little under a year... but my pet doesn't like you. lol, jk - I don't like you. Byeeeeee! #sorrynotsorry`,
                        `Hey ${dumpeeName}, it's ${dumperName} - I know we've been dating for a little under a year... but I would rather lay in bed with my fur baby since they are a better cuddler than you. This it's not going to work out. Take care. See you never!`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, it's ${dumperName} - I know we've been dating for a over a year... but my pet doesn't like you. lol, jk - I don't like you. Byeeeeee! #sorrynotsorry`,
                        `Hey ${dumpeeName}, it's ${dumperName} - I know we've been dating for a over a year... but I would rather lay in bed with my fur baby since they are a better cuddler than you. This it's not going to work out. Take care. See you never!`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Pets section ends




            // cheating section starts
            cheating: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, it's ${dumperName}... I cant believe that after less than 6 months together – there was some cheating going on... and I'm not going to specify who, but this isn't going to work! Hit the bricks.`,
                        `Hey ${dumpeeName}, it's ${dumperName}... so we've been together for less than 6 months together – and I must say the other person I'm seeing is a better kisser. So, we gotta call er quits!`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, it's ${dumperName}... I cant believe that after less than a year together – there was some cheating going on... and I'm not going to specify who, but this isn't going to work! Hit the bricks.`,
                        `Hey ${dumpeeName}, it's ${dumperName}... so we've been together for less than a year – and I must say the other person I'm seeing is a better kisser. So, we gotta call er quits!`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, it's ${dumperName}... I cant believe that after more than a year together – there was some cheating going on... and I'm not going to specify who, but this isn't going to work! Hit the bricks.`,
                        `Hey ${dumpeeName}, it's ${dumperName}... so we've been together for more than a year – and I must say the other person I'm seeing is a better kisser. So, we gotta call er quits!`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Cheating section ends



            // parent section starts
            parents: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, it's ${dumperName}. I would've though that around the 6 month mark my parents would like you, but they definitely don't. therefore, I think we need to go out separate ways!`,
                        `Hey ${dumpeeName}, it's ${dumperName}. It's been like 6 months and dad still thinks you're not right for me. Let's see other people:( `
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, it's ${dumperName}. I would think that after almost a year together,  my parents would like you, but they definitely don't. therefore, I think we need to go out separate ways!`,
                        `Hey ${dumpeeName}, it's ${dumperName}. It's been like 1 year and dad still thinks you're not right for me. Let's see other people:( `
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, it's ${dumperName}. I would think that after being together for well over a year, my parents would like you, but they definitely don't. therefore, I think we need to go out separate ways!`,
                        `Hey ${dumpeeName}, it's ${dumperName}. It's been like, over a year and dad still thinks you're not right for me. Let's see other people:(`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Parents section ends
            //mouth section starts
            mouth: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `Yo ${dumpeeName}, we've been dating for a short time now and it really bothers me when you don't shut yo mouth when you eat! We're done. Peace ${dumperName}.`,
                        `Howdie doody!, ${dumpeeName}. It's been less than 6 months since we have started dating, but it feels like an eternity. I am amazed that you haven't taken my hints seriously and learned how to chew with your mouth closed. See you later, Alligator, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `Yo ${dumpeeName}, we've been dating for a while now and it really bothers me when you don't shut yo mouth when you eat! We done. Peace ${dumperName}.`,
                        `Howdie doody!, ${dumpeeName}. It's been less than a year since we have started dating, but it feels like an eternity. I am amazed that you haven't taken my hints seriously and learned how to chew with your mouth closed. See  you later, Alligator, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `Yo ${dumpeeName}, we've been dating for yearssssss now and it really bothers me when you don't shut yo mouth when you eat! We done. Peace ${dumperName}.`,
                        `Howdie doody!, ${dumpeeName}. It's been more than a year since we have started dating, but it feels like an eternity. I am amazed that you haven't taken my hints seriously and learned how to chew with your mouth closed. See  you later, Alligator, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            } // Mouth section ends
        }, //FUNNY SECTION ENDS


        //PASSIVE SECTION STARTS
        "passive": {
            //pet section starts
            pet: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName} - I know we've been dating for a little under 6 months... and I really thought we were going somewhere but my pet just told me that you're not the one, and I think it's best if the Breakup Generator does this for me, all the best ${dumperName}`,
                        `Hey ${dumpeeName}, it's ${dumperName} - I know we've been dating for a little under 6 months... but I was talking to my pet and we decided that I'm going to unfriend you on Facebook and block all your calls. Take care!`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName} - I know we've been dating for around year... and I really thought we were going somewhere but my pet just told me that you're not the one, and I think it's best if the Breakup Generator does this for me, all the best ${dumperName}`,
                        `Hey ${dumpeeName}, it's ${dumperName} - I know we've been dating for around a year... but I was talking to my pet and we decided that I'm going to unfriend you on Facebook and block all your calls. Take care!`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName} - I know we've been dating for over a year... and I really thought we were going somewhere but my pet just told me that you're not the one, and I think it's best if the Breakup Generator does this for me, all the best ${dumperName}`,
                        `Hey ${dumpeeName}, it's ${dumperName} - I know we've been dating for over a year... but I was talking to my pet and we decided that I'm going to unfriend you on Facebook and block all your calls. Take care!`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Pet section ends
            // cheating section starts
            cheating: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, It's ${dumperName}, So after less than 6 months together I found out that there is someone else and I think it would be best if we both see other people, but we should stay friends!`,
                        `Dear ${dumpeeName}, I  know we have been together for less than 6 months, but I have also been dating someone else for 6 months and I am to passive to tell you, I'm sorry don't be mad .all the best ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, It's ${dumperName}, So after less than a year together I found out that there is someone else and I think it would be best if we both see other people, but we should stay friends!`,
                        `Dear ${dumpeeName}, I  know we have been together for less than a year, but I have also been dating someone else for 6 months and I am to passive to tell you, I'm sorry don't be mad .all the best ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, It's ${dumperName}, So after over a year together I found out that there is someone else and I think it would be best if we both see other people, but we should stay friends!`,
                        `Dear ${dumpeeName}, I  know we have been together for over a year, but I have also been dating someone else for 6 months and I am to passive to tell you, I'm sorry don't be mad .all the best ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Cheating section ends
            //parents section starts 
            parents: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, It's ${dumperName}, I have really enjoyed getting to know you over the past few months, but my parents have informed me that you are a distraction, I'm too passive to break up in person...so yea..bye`,
                        `Hey ${dumpeeName}, It's ${dumperName}, It's been like 6 months and parents just don't like your shenanigans I think it is best if we ignore each other forever. See you around.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, It's ${dumperName}, I have really enjoyed getting to know you over the past months, but my parents have informed me that you are a distraction, I'm too passive to break up in person...so yea..bye`,
                        `Hey ${dumpeeName}, It's ${dumperName}, It's been almost a year and parents just don't like your shenanigans I think it is best if we ignore each other forever. See you around.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `Hey ${dumpeeName}, It's ${dumperName}, I have really enjoyed getting to know you over the past year or so, but my parents have informed me that you are a distraction, I'm too passive to break up in person...so yea..bye`,
                        `Hey ${dumpeeName}, It's ${dumperName}, It's been over a year and parents just don't like your shenanigans I think it is best if we ignore each other forever. See you around.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Parent section ends 
            //mouth section starts
            mouth: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `I'm sorry to bother you ${dumpeeName}, we have been dating for a few months now and I don't want be interfering but, the way you eat doesn't sit well with me. I think it is best if we ignore each others existance. Thanks for the memories, ${dumperName}.`,
                        `Hey ${dumpeeName}, we have been together for less than 6 months and I think it is best if we go our own ways, your eating habits are just not compatible with mine. Bye, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `I'm sorry to bother you ${dumpeeName}, we have been dating for almost a year now and I don't want be interfering but, the way you eat doesn't sit well with me. I think it is best if we ignore each others existance. Thanks for the memories, ${dumperName}.`,
                        `Hey ${dumpeeName}, we have been together for less than a year and I think it is best if we go our own ways, your eating habits are just not compatible with mine. Bye, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `I'm sorry to bother you ${dumpeeName}, we have been dating for over now and a year I don't want be interfering but, the way you eat doesn't sit well with me. I think it is best if we ignore each others existance. Thanks for the memories, ${dumperName}.`,
                        `Hey ${dumpeeName}, we have been together for over a year and I think it is best if we go our own ways, your eating habits are just not compatible with mine. Bye, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            } // Mouth section ends
        }, //PASSIVE SECTION ENDS


        //FORMAL SECTION STARTS
        "formal": {
            //pets section starts
            pet: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `Greetings ${dumpeeName}, Hope you and your family are cared for, time sure does fly and before you know it it's been around 6 months. I am saddened to inform you that my fluffy companion has lost interest in you and therefore our contract is null. Be well. Sincerely, ${dumperName}.`,
                        `Good evening ${dumpeeName}, I was walking and talking with my pet a fort night ago, when it dawned on me that we are close to the 6 month mark of our cordial affair. I was reminded that you have not made any efforts to bond with my fur child, I think it is best to network with other individuals. Cheerio ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `Greetings ${dumpeeName}, Hope you and your family are cared for, time sure does fly and before you know it it's approaching a year. I am saddened to inform you that my fluffy companion has lost interest in you and therefore our contract is null. Be well. Sincerely, ${dumperName}.`,
                        `Good evening ${dumpeeName}, I was walking and talking with my pet a fort night ago, when it dawned on me that we are close to the year mark of our cordial affair. I was reminded that you have not made any efforts to bond with my fur child, I think it is best to network with other individuals. Cheerio ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `Greetings ${dumpeeName}, Hope you and your family are cared for, time sure does fly and before you know it it's been over a year. I am saddened to inform you that my fluffy companion has lost interest in you and therefore our contract is null. Be well. Sincerely, ${dumperName}.`,
                        `Good evening ${dumpeeName}, I was walking and talking with my pet a fort night ago, when it dawned on me that we are past the year mark of our cordial affair. I was reminded that you have not made any efforts to bond with my fur child, I think it is best to network with other individuals. Cheerio ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }


            }, // Pets section ends
            // cheating section starts
            cheating: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `My dearest ${dumpeeName}, I was informed the other evening that after a brief moment of time you were caught with your hands in someone else's cookie jar. This nulls our agreement and therefore our contract is terminated. Sincerely ${dumperName}.`,
                        `My beloved ${dumpeeName} it is I ${dumperName}, the eyes of one of us have wondered in the past few months and I must say I like what I am seeing. Please take this telegram drafted by the Break Up Generator as a token of my gratitude. May your future mistakes not be as bad as your past.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `My dearest ${dumpeeName}, I was informed the other evening that after almost a year of time you were caught with your hands in someone else's cookie jar. This nulls our agreement and therefore our contract is terminated. Sincerely ${dumperName}.`,
                        `My beloved ${dumpeeName}, it is I ${dumperName}, the eyes of one of us have wondered in the past few months and I must say I like what I am seeing. Please take this telegram drafted by the Break Up Generator as a token of my gratitude. May your future mistakes not be as bad as your past.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `My dearest ${dumpeeName}, I was informed the other evening that after over a year of time you were caught with your hands in someone else's cookie jar. This nulls our agreement and therefore our contract is terminated. Sincerely ${dumperName}.`,
                        `My beloved ${dumpeeName}, it is I ${dumperName}, the eyes of one of us have wondered in the past year and I must say I like what I am seeing. Please take this telegram drafted by the Break Up Generator as a token of my gratitude. May your future mistakes not be as bad as your past.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Cheating section ends
            // parents section starts
            parents: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `My sweet ${dumpeeName}, my guardians have given you a chance over the past 6 months and have informed me that they are not impressed with you lack community service, therefore we must end our relationship. Goodbye. ${dumperName}`,
                        `Salutations ${dumpeeName}. It has been less than 6 months and my guardians are just informing me that they do not approve of you. It is in the best interest of both of us if we part ways. Wishing you well, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `My sweet ${dumpeeName}, my guardians have given you a chance over the past few months and have informed me that they are not impressed with you lack community service, therefore we must end our relationship. Goodbye. ${dumperName}`,
                        `Salutations ${dumpeeName}. It has been less than a year and my guardians are just informing me that they do not approve of you. It is in the best interest of both of us if we part ways. Wishing you well, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `My sweet ${dumpeeName}, my guardians have given you a chance over the past year and have informed me that they are not impressed with you lack community service, therefore we must end our relationship. Goodbye. ${dumperName}`,
                        `Salutations ${dumpeeName}. It has been over a year and my guardians are just informing me that they do not approve of you. It is in the best interest of both of us if we part ways. Wishing you well, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Parents section ends
            //mouth section starts
            mouth: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `My dearest ${dumpeeName}, I know it has only been a few months since we merged. But after self reflecting over a glass of Dom Perignon, and side of Lobster rolls, It became apparent that the way you chew your food is quite concerning. Shall we see other people? Yours truely, ${dumperName}.`,
                        `Salutations ${dumpeeName}, it is I, ${dumperName}. My executive assistant has informed me during our biweekly skype call that they could not hear me due to your loud chewing. We've been together for a few months, and I hear this every week. therefore, we must explore other options. There are many for me ;) Goodbye. ${dumper}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `My dearest ${dumpeeName}, I know it has only been a almost a year since we merged. But after self reflecting over a glass of Dom Perignon, and side of Lobster rolls, It became apparent that the way you chew your food is quite concerning. Shall we see other people? Yours truely, ${dumperName}.`,
                        `Salutations ${dumpeeName}, it is I, ${dumperName}. My executive assistant has informed me during our biweekly skype call that they could not hear me due to your loud chewing. We've been together for almost a year, and I hear this every week. therefore, we must explore other options. There are many for me ;) Goodbye. ${dumper}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `My dearest ${dumpeeName}, I know it has been over  a year since we merged. But after a self reflecting over a glass of dom perignon, and side of Lobster rolls, It became apparent that the way you chew your food is quite concerning. Shall we see other people? Yours truely, ${dumperName}.`,
                        `Salutations ${dumpeeName}, it is I, ${dumperName}. My executive assistant has informed me during our biweekly skype call that they could not hear me due to your loud chewing. We've been together for over a year and I hear this every week. therefore, we must explore other options. There are many for me ;) Goodbye. ${dumperName} `
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            } // Mouth section ends
        }, // FORMAL SECTION ENDS


        //SONG LYRICS SECTION STARTS
        "song": {
            //pets section starts
            pet: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `${dumpeeName}, I found this song by Cat Stevens and I really think that is applies to our relationship over the past 6 months or so, I love my dog as much as I love you, but you may fade, my dog will always come through. All my dog asks from me is the food to give him strength, all he ever needs is love that he knows he will get. I love my dog baby, more than I will ever love you. Goodbye, ${dumperName}.`,
                        `${dumpeeName}, after less than 6 months together I have realized that you ain't nothing but a hound dog, cryin' all the time, you ain't never caught a rabbit, and you ain't no friend of mine. They said you was high-classes, well that was just a lie. I am taking Elvis' word for it and leaving you behind, You ain't no friend of mine, ${dumpeeName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `${dumpeeName}, I found this song by Cat Stevens and I really think that is applies to our relationship over the past almost year together, I love my dog as much as I love you, but you may fade, my dog will always come through. All my dog asks from me is the food to give him strength, all he ever needs is love that he knows he will get. I love my dog baby, more than I will ever love you. Goodbye, ${dumperName}.`,
                        `${dumpeeName}, after less than a year together I have realized that you ain't nothing but a hound dog, cryin' all the time, you ain't never caught a rabbit, and you ain't no friend of mine. They said you was high-classes, well that was just a lie. I am taking Elvis' word for it and leaving you behind, You ain't no friend of mine, ${dumpeeName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `${dumpeeName}, I found this song by Cat Stevens and I really think that is applies to our relationship over the past  year together, I love my dog as much as I love you, but you may fade, my dog will always come through. All my dog asks from me is the food to give him strength, all he ever needs is love that he knows he will get. I love my dog baby, more than I will ever love you. Goodbye, ${dumperName}.`,
                        `${dumpeeName}, after  year together I have realized that you ain't nothing but a hound dog, cryin' all the time, you ain't never caught a rabbit, and you ain't no friend of mine. They said you was high-classes, well that was just a lie. I am taking Elvis' word for it and leaving you behind, You ain't no friend of mine, ${dumpeeName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }


            }, // Pets section ends
            // cheating section starts
            cheating: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `Wow, ${dumpeeName}, I can't believe that after less than 6 months together you did this, in the words of Justin Timberlake... you don't have to say, what you did, I already know, I found out from them, Now there is just no chance, for you and me, there'll never be, and don't it make you sad about it. You told me you loved me, why did you leave me, all alone...
                            Cry  me a river,
                            The damage is done, ${dumperName}.`,
                        `${dumpeeName},  you came in and caught me red-handed, creeping with the person next door. Picture this, we were both butt-naked, banging on the bathroom floor. How could I forget that I had given you a key after less than 6 months of dating. All this time you were standing there, never taking your eyes off me. But you caught me on the counter, saw me bangin' on the sofa, even caught me on camera, but I am telling you, it wasn't me, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `Wow, ${dumpeeName}, I can't believe that after less than a year together you did this, in the words of Justin Timberlake... you don't have to say, what you did, I already know, I found out from them, Now there is just no chance, for you and me, there'll never be, and don't it make you sad about it. You told me you loved me, why did you leave me, all alone...
                            Cry  me a river,
                            The damage is done, ${dumperName}.`,
                        `${dumpeeName}, you came in and caught me red-handed, creeping with the person next door. Picture this, we were both butt-naked, banging on the bathroom floor. How could I forget that I had given you a key after less than a year of dating. All this time you were standing there, never taking your eyes off me. But you caught me on the counter, saw me bangin' on the sofa, even caught me on camera, but I am telling you, it wasn't me, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `Wow, ${dumpeeName}, I can't believe that after over a year together you did this, in the words of Justin Timberlake... you don't have to say, what you did, I already know, I found out from them, Now there is just no chance, for you and me, there'll never be, and don't it make you sad about it. You told me you loved me, why did you leave me, all alone...
                            Cry  me a river,
                            The damage is done, ${dumperName}.`,
                        `${dumpeeName}, you came in and caught me red-handed, creeping with the person next door. Picture this, we were both butt-naked, banging on the bathroom floor. How could I forget that I had given you a key after over a year of dating. All this time you were standing there, never taking your eyes off me. But you caught me on the counter, saw me bangin' on the sofa, even caught me on camera, but I am telling you, it wasn't me, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Cheating section ends
            // parents section starts
            parents: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `${dumpeeName}'s mom has got it goin' on, ${dumpeeName}, can I come over after school?, we can hang around by the pool. Did your mom get back from her business trip? Is she there or is she trying to give me the slip? You know, I am not the little kid that I used to be, I am all grown up now, baby can't you see. ${dumpeeName}'s mom has got it going on, she is all i want and I have waited for so long, ${dumpeeName}, cant you see you're not the one for me, I know it might be wrong, but I am in love with ${dumpeeName}'s mom. There seems to be a conflict of interest over the past couple months, I think it is best if i pursue your mom and stop seeing you. bye! ${dumperName}.`,
                        `Dear ${dumpeeName}, Do you remember, we were sitting there by the water? You put your arm around me for the first time. You made a rebel of a careless man's careful daughter. You are the best thing that has ever been mine. Flash forward a few months and we're taking on the world together, and there's a drawer of my things at your place. But my parents do not approve of my rebel behaviour since meeting you a few months ago. They think it is best if we break up. It sucks I know, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `${dumpeeName}'s mom has got it goin' on, ${dumpeeName}, can I come over after school?, we can hang around by the pool. Did your mom get back from her business trip? Is she there or is she trying to give me the slip? You know, I am not the little kid that I used to be, I am all grown up now, baby can't you see. ${dumpeeName}'s mom has got it going on, she is all i want and I have waited for so long, ${dumpeeName}, cant you see you're not the one for me, I know it might be wrong, but I am in love with ${dumpeeName}'s mom. There seems to be a conflict of interest over the past year, I think it is best if i pursue your mom and stop seeing you. bye! ${dumperName}.`,
                        `Dear ${dumpeeName}, Do you remember, we were sitting there by the water? You put your arm around me for the first time. You made a rebel of a careless man's careful daughter. You are the best thing that has ever been mine. Flash forward a few months and we're taking on the world together, and there's a drawer of my things at your place. But my parents do not approve of my rebel behaviour since meeting you almost a year ago. They think it is best if we break up. It sucks I know, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `${dumpeeName}'s mom has got it goin' on, ${dumpeeName}, can I come over after school?, we can hag around by the pool, Did your mom get back from her business trip? Is she there or is she trying to give me the slip? You know, I am not the little kid that I used to be, I am all grown up now, baby can't you see. ${dumpeeName}'s mom has got it going on, she is all i want and I have waited for so long, ${dumpeeName}, cant you see you're not the one for me, I know it might be wrong, but I am in love with ${dumpeeName}'s mom. There seems to be a conflict of interest over the years, I think it is best if i pursue your mom and stop seeing you. bye! ${dumperName}.`,
                        `Dear ${dumpeeName}, Do you remember, we were sitting there by the water? You put your arm around me for the first time. You made a rebel of a careless man's careful daughter. You are the best thing that has ever been mine. Flash forward a few months and we're taking on the world together, and there's a drawer of my things at your place. But my parents do not approve of my rebel behaviour since meeting you over a year ago. They think it is best if we break up. It sucks I know, ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            }, // Parents section ends
            //mouth section starts
            mouth: {
                short: function(dumperName, dumpeeName) {
                    var statements = [
                        `My dear ${dumpeeName}, Now and then I reflect on when we are together, like when you said you felt so happy you could die. I told myself that you were right for me, but I felt so lonely in your company, staring at you eating with your mouth open. I must admit that our relationship is over after less than 6 months of dating. You will forever be somebody that I used to know. All the best, ${dumperName}.`,
                        `${dumpeeName}, After less than 6 months together I have finally gained enough courage and I'm doing this tonight. You're probably gonna start a fight, I know this cant be right. Hey Baby come on. I loved you endlessly. When you weren't there for me, so now its time to leave and make it alone. I know that I cant take no more of your poor eating habits, It ain't no lie, I want to see you out that door baby bye, bye bye. ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];

                },
                medium: function(dumperName, dumpeeName) {
                    var statements = [
                        `My dear ${dumpeeName}, Now and then I reflect on when we are together, like when you said you felt so happy you could die. I told myself that you were right for me, but I felt so lonely in your company, staring at you eating with your mouth open. I must admit that our relationship is over after less than a year of dating. You will forever be somebody that I used to know. All the best, ${dumperName}.`,
                        `${dumpeeName}, After less than a year together I have finally gained enough courage and I'm doing this tonight. You're probably gonna start a fight, I know this cant be right. Hey Baby come on. I loved you endlessly. When you weren't there for me, so now its time to leave and make it alone. I know that I cant take no more of your poor eating habits, It ain't no lie, I want to see you out that door baby bye, bye bye. ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                },
                long: function(dumperName, dumpeeName) {
                    var statements = [
                        `My dear ${dumpeeName}, Now and then I reflect on when we are together, like when you said you felt so happy you could die. I told myself that you were right for me, but I felt so lonely in your company, staring at you eating with your mouth open. I must admit that our relationship is over after over a year of dating. You will forever be somebody that I used to know. All the best, ${dumperName}.`,
                        `${dumpeeName}, After over a year together I have finally gained enough courage and I'm doing this tonight. You're probably gonna start a fight, I know this cant be right. Hey Baby come on. I loved you endlessly. When you weren't there for me, so now its time to leave and make it alone. I know that I cant take no more of your poor eating habits, It ain't no lie, I want to see you out that door baby bye, bye bye. ${dumperName}.`
                    ];
                    var randoNum = Math.floor(Math.random() * statements.length);
                    return statements[randoNum];
                }
            } // Mouth section ends
        } // SONG LYRICS SECTION ENDS
    };

    $('form').on('submit', function(e) {
        e.preventDefault();
        var dumperName = $('input#dumper').val();
        var dumpeeName = $('input#dumpee').val();
        var lengthOfDating = $('input[name=length]:checked').val();
        var reasonForBreakUp = $('input[name=reason]:checked').val();
        var styleOfBreakUp = $('input[name=style]:checked').val();

        var finalStatement = breakupVariations[styleOfBreakUp][reasonForBreakUp][lengthOfDating];
        // Then show the option!!
        $('.resultWrapper').html(`<h2 class="resultHeading">Here's your personalized letter...</h2> <p class="results-paragraph"> ${finalStatement(dumperName,dumpeeName)}</p>`);
    }); // End of Form submit 
}); // End of document ready
