const questions = [
  {
    question: 'I have the instructions for this test clearly in mind:',
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'Uncertain ', score: 0 },
      C: { text: 'No', score: 0 },
    },
  },
  {
    question: 'I am ready to answer each question as truthfully as possible:',
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'Uncertain ', score: 0 },
      C: { text: 'No', score: 0 },
    },
  },
  {
    question: 'I would rather have a house:',
    options: {
      A: { text: 'In a sociable suburb ', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'alone in deep woods', score: 0 },
    },
  },
  {
    question: 'I can find enough energy to face my difficulties.',
    options: {
      A: { text: 'always ', score: 2 },
      B: { text: 'generally ', score: 1 },
      C: { text: 'seldom', score: 0 },
    },
  },
  {
    question: 'I feel a bit nervous of wild animals even when they are in strong cages.',
    options: {
      A: { text: 'Yes (True) ', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'No (False)', score: 2 },
    },
  },
  {
    question: 'I hold back from criticizing people and their ideas.',
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'No', score: 2 },
    },
  },
  {
    question: 'I make smart, sarcastic remarks to people if I think they deserve it.',
    options: {
      A: { text: 'Generally ', score: 2 },
      B: { text: 'Sometimes ', score: 1 },
      C: { text: 'Never', score: 0 },
    },
  },
  {
    question: 'I prefer semi classical music to popular tones:',
    options: {
      A: { text: 'True ', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'False', score: 2 },
    },
  },
  {
    question: "I saw two neighbour's children fighting, I would:",
    options: {
      A: { text: 'Leave them to settle it ', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'Reason with them', score: 2 },
    },
  },
  {
    question: 'On social occasions I:',
    options: {
      A: { text: 'Readily come forward ', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'Prefer to stay quietly in the background', score: 0 },
    },
  },
  {
    question: 'It would be more interesting to be:',
    options: {
      A: { text: 'A construction Engineer', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'A writer of plays', score: 2 },
    },
  },
  {
    question: 'I would rather stop in the street to watch an artist painting than listen to some people having a quarrel:',
    options: {
      A: { text: 'True ', score: 2 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'False', score: 0 },
    },
  },
  {
    question: 'I can generally put up with conceited people, even though they brag or show they think too well of themselves:',
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'In Between', score: 1 },
      C: { text: 'No', score: 2 },
    },
  },
  {
    question: "You can almost always notice on a man's face when he is dishonest:",
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'No', score: 2 },
    },
  },
  {
    question: 'It would be good for everyone if vacations (holidays) were longer and everyone had to take them:',
    options: {
      A: { text: 'Agree ', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'Disagree', score: 2 },
    },
  },
  {
    question: 'I would rather take the gamble of a job with possibly large but uneven earnings, than one with a steady, small salary:',
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'No', score: 2 },
    },
  },
  {
    question: 'I talk about my feelings:',
    options: {
      A: { text: 'Only if necessary', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'Readily, whenever I have a chance', score: 0 },
    },
  },
  {
    question: 'Once in a while I have a sense of vague danger or sudden dread for reasons that I do not understand:',
    options: {
      A: { text: 'Yes ', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'No', score: 0 },
    },
  },
  {
    question: 'When criticized wrongly for something I did not do, I:',
    options: {
      A: { text: 'Have no feeling of guilt', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'Still feel a bit guilty', score: 2 },
    },
  },
  {
    question: 'Money can buy almost everything:',
    options: {
      A: { text: 'Yes ', score: 2 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'No', score: 0 },
    },
  },
  {
    question: 'My decisions are governed more by my:',
    options: {
      A: { text: 'Heart', score: 0 },
      B: { text: 'Feelings and Reason equally', score: 1 },
      C: { text: 'Head', score: 2 },
    },
  },
  {
    question: 'Most people would be happier if they lived more with their fellows and did the same things as others:',
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'No', score: 2 },
    },
  },
  {
    question: 'I occasionally get puzzled, when looking in a mirror, as to which is my r right and left:',
    options: {
      A: { text: 'True ', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'False', score: 2 },
    },
  },
  {
    question: 'When talking, I like:',
    options: {
      A: { text: 'To say things, just as they occur to me', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'To get my thoughts well organized first', score: 2 },
    },
  },
  {
    question: 'When something really makes me furious, I find I calm down again quite quickly:',
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'No', score: 2 },
    },
  },
  {
    question: 'With the same hours and pay, it would be more interesting to be:',
    options: {
      A: { text: 'A carpenter or Cook', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'A waiter in a good restaurant', score: 2 },
    },
  },
  {
    question: 'I have been elected to:',
    options: {
      A: { text: 'Only a few offices', score: 0 },
      B: { text: 'Several', score: 1 },
      C: { text: 'Many offices', score: 2 },
    },
  },
  {
    question: "'Spade' is to 'dig' as 'knife' is to:",
    options: {
      A: { text: 'Sharp ', score: 0 },
      B: { text: 'Cut ', score: 1 },
      C: { text: 'Point', score: 0 },
    },
  },
  {
    question: "I sometimes can't get to sleep because an idea keeps running though my mind:",
    options: {
      A: { text: 'True ', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'False', score: 2 },
    },
  },
  {
    question: 'In my personal life I reach the goals I set, almost all the time:',
    options: {
      A: { text: 'True ', score: 2 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'False', score: 0 },
    },
  },
  {
    question: 'An outdated law should be changed:',
    options: {
      A: { text: 'Only after considerable discussion', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'Promptly', score: 2 },
    },
  },
  {
    question: 'I am uncomfortable when I work on a project requiring quick action affecting others:',
    options: {
      A: { text: 'True ', score: 0 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'False', score: 2 },
    },
  },
  {
    question: 'Most of the people I know would rate me as an amusing talker:',
    options: {
      A: { text: 'Yes ', score: 2 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'No', score: 0 },
    },
  },
  {
    question: "When I see 'sloppy', untidy people, I:",
    options: {
      A: { text: 'Just accept it', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'Get disgusted and annoyed', score: 2 },
    },
  },
  {
    question: 'I get slightly embarrassed if I suddenly become the focus of attention in a social group:',
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'No', score: 2 },
    },
  },
  {
    question: 'I am always glad to join a large gathering, for example, a party, dance or public meeting:',
    options: {
      A: { text: 'Yes ', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'No', score: 0 },
    },
  },
  {
    question: 'In school I preferred (or prefer):',
    options: {
      A: { text: 'Music', score: 2 },
      B: { text: 'Uncertain ', score: 1 },
      C: { text: 'Handwork and Crafts', score: 0 },
    },
  },
  {
    question: 'When I have been put in charge of something, I insist that my instructions are followed or else I resign:',
    options: {
      A: { text: 'Yes ', score: 2 },
      B: { text: 'Sometimes ', score: 1 },
      C: { text: 'No', score: 0 },
    },
  },
  {
    question: 'For parents it is more important to:',
    options: {
      A: { text: 'Help their children develop their affections', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'Teach their children how to control emotions', score: 0 },
    },
  },
  {
    question: 'In a group task I would rather:',
    options: {
      A: { text: 'Try to improve arrangements', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'Keep the records and see that rules are followed', score: 0 },
    },
  },
  {
    question: 'I feel a need every now and then to engage in a tough physical activity:',
    options: {
      A: { text: 'Yes ', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'No', score: 2 },
    },
  },
  {
    question: 'I would rather mix with polite people than rough, rebellious individuals:',
    options: {
      A: { text: 'Yes ', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'No', score: 0 },
    },
  },
  {
    question: 'I feel terribly dejected when people criticize me in a group:',
    options: {
      A: { text: 'True ', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'False', score: 0 },
    },
  },
  {
    question: 'If I am called in by my boss, I:',
    options: {
      A: { text: 'Make it a chance to ask for something I want', score: 0 },
      B: { text: 'In between ', score: 1 },
      C: { text: "Fear I've done something wrong", score: 2 },
    },
  },
  {
    question: 'What this world need is:',
    options: {
      A: { text: " More steady and 'solid' citizens ", score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: " More 'idealists' with plans for a better world", score: 2 },
    },
  },
  {
    question: 'I am always keenly aware of attempts at propaganda in things read:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'As a teenager, I joined in school sports:',
    options: {
      A: { text: ' Occasionally ', score: 2 },
      B: { text: ' Fairly often ', score: 1 },
      C: { text: ' A great deal', score: 0 },
    },
  },
  {
    question: 'I keep my room well organized, with things in known places almost all the time:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I sometimes get in a state of tension and turmoil as I think of the day’s happenings.',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In Between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I sometimes doubt whether people I am talking to are really interested in what I am saying.',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'If I had to choose, I would rather be:',
    options: {
      A: { text: ' A forester ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' A high school teacher', score: 2 },
    },
  },
  {
    question: 'For special holidays and birthdays, I:',
    options: {
      A: { text: ' Like to give personal presents ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' Feel that buying presents is a bit of a nuisance', score: 0 },
    },
  },
  {
    question: "'Tired' is to 'work' and 'proud' is to:",
    options: {
      A: { text: ' Smile ', score: 0 },
      B: { text: ' Success ', score: 1 },
      C: { text: ' Happy', score: 0 },
    },
  },
  {
    question: 'Which of the following items is different in kind from others?',
    options: {
      A: { text: ' Candle ', score: 0 },
      B: { text: ' Moon ', score: 1 },
      C: { text: ' Electric light', score: 0 },
    },
  },
  {
    question: 'I have been let down by my friends:',
    options: {
      A: { text: ' Hardly ever ', score: 2 },
      B: { text: ' Occasionally ', score: 1 },
      C: { text: ' Quite a lot', score: 0 },
    },
  },
  {
    question: 'I have some characteristics in which I feel definitely superior to most people.',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'When I get upset, I try hard to hide my feelings from others.',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'I like to go out to a show or entertainment:',
    options: {
      A: { text: ' More than once a week (more than average) ', score: 2 },
      B: { text: ' About one a week (average) ', score: 1 },
      C: { text: ' Less than once a week (less than average)', score: 0 },
    },
  },
  {
    question: 'I think that plenty of freedom is more important than good manners and respect for the law:',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'I tend to keep quiet in the presence of senior persons (people of greater experience, age, or rank)',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'I find it hard to address or recite to a large group',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'I have a good sense of direction (find it easy to tell which is North, South, East, East or West) when in a strange place.',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'If someone got mad at me, I would:',
    options: {
      A: { text: ' Try to calm him down ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' Get irritated', score: 2 },
    },
  },
  {
    question: "When I read an unfair magazine article, I am more inclined to forget it than to feel like 'hitting back’",
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'My memory tends to drop a lot of unimportant, trivial things, for example, names of streets or stores in town:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I could enjoy the life of an animal doctor, handling disease and surgery of animals:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'I eat food with gusto, not always so carefully and properly as some people.',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: "There are times when I don't feel in the right mood to see anyone.",
    options: {
      A: { text: ' Very rarely ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Quite often', score: 2 },
    },
  },
  {
    question: 'People sometimes warn me that I show my excitement in voice and manner too obviously.',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'As a teenager, if I differed in opinion from my parents, I usually:',
    options: {
      A: { text: ' Kept my own opinion ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Accepted their authority', score: 0 },
    },
  },
  {
    question: 'I would prefer to have an office of my own, not sharing it with another person:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I would rather enjoy life quietly in my own way than be admired for my achievements:',
    options: {
      A: { text: ' True ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 0 },
    },
  },
  {
    question: 'I feel nature in most things:',
    options: {
      A: { text: ' True ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 0 },
    },
  },
  {
    question: 'I find myself upset rather than helped by the kind of criticism that many people offer one:',
    options: {
      A: { text: ' Often ', score: 2 },
      B: { text: ' Occasionally ', score: 1 },
      C: { text: ' Never', score: 0 },
    },
  },
  {
    question: 'I am always able to keep the expression of my feelings under exact control:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'In starting a useful invention, I would prefer:',
    options: {
      A: { text: ' Working on it in the laboratory ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' Selling it to people', score: 2 },
    },
  },
  {
    question: "'Surprise' is to 'Strange' as 'fear' is to:",
    options: {
      A: { text: ' Brave  ', score: 0 },
      B: { text: ' Anxious  ', score: 0 },
      C: { text: ' Terrible', score: 1 },
    },
  },
  {
    question: 'Which of the following fractions is not the same class as the others:',
    options: {
      A: { text: ' 3/7  ', score: 0 },
      B: { text: ' 3/9  ', score: 1 },
      C: { text: ' 3/11', score: 0 },
    },
  },
  {
    question: "Some people seem to ignore or avoid me, although, I don't know why:",
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'People treat me less reasonably than my good intentions deserve:',
    options: {
      A: { text: ' Often ', score: 0 },
      B: { text: ' Occasionally ', score: 1 },
      C: { text: ' Never', score: 2 },
    },
  },
  {
    question: 'The use of foul language, even when it is not in a mixed group of men and women, still disgusts me:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'I have decidedly fewer friends than most people:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: "I would hate to be where there wouldn't be a lot of people to talk to:",
    options: {
      A: { text: ' True ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 0 },
    },
  },
  {
    question: "People sometimes call me careless, even though they think I'm likable person:",
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: "'Stage-freight' in various social situations is something I have experienced:",
    options: {
      A: { text: ' Quite often ', score: 0 },
      B: { text: ' Occasionally  ', score: 1 },
      C: { text: ' Hardly ever', score: 2 },
    },
  },
  {
    question: 'When I am in small group, I am content to sit back and let others do most of the talking:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'I prefer reading:',
    options: {
      A: { text: ' A realistic account of military or political battles ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' A sensitive, imaginative novel', score: 2 },
    },
  },
  {
    question: "When bossy people try to 'push me around', I do just the opposite of what they wish:",
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'Business superiors or members of my family as a rule, find fault with me only when there is a real cause:',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'In streets or stores, I dislike the way some persons stare at people:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'On a long journey, I would prefer to:',
    options: {
      A: { text: ' Read something profound, but interesting ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' Pass the time talking casually with a fellow passenger', score: 0 },
    },
  },
  {
    question: 'In a situation which may become dangerous, I believe in making a fuss and speaking up even if calmness and politeness are lost:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'If acquaintances treat me badly and show they dislike me:',
    options: {
      A: { text: " It doesn't upset me a bit ", score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' I tend to get downhearted', score: 2 },
    },
  },
  {
    question: 'I find it embarrassing to have praise or complements bestowed on me:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I would rather have a job with:',
    options: {
      A: { text: ' A fixed, certain salary ', score: 0 },
      B: { text: ' in between ', score: 1 },
      C: { text: ' A larger salary, which depended on my constantly persuading people I am worth it', score: 2 },
    },
  },
  {
    question: 'To keep informed, I like:',
    options: {
      A: { text: ' to discuss issues with people ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' To rely on the actual news reports', score: 2 },
    },
  },
  {
    question: 'I like to take an active part in social affairs, committee work etc:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'In carrying out a task, I am not satisfied unless even the minor details are given close attention',
    options: {
      A: { text: ' True ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' False', score: 0 },
    },
  },
  {
    question: 'Quite small setbacks occasionally irritate me too much:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I am always a sound sleeper, never walking or talking in my sleep:',
    options: {
      A: { text: ' Yes  ', score: 0 },
      B: { text: ' In between  ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'It would be more interesting to work in a business:',
    options: {
      A: { text: ' A talking to customers ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Keeping office accounts and records', score: 0 },
    },
  },
  {
    question: "'Size' is to 'length' as 'dishonest' is to:",
    options: {
      A: { text: ' Prison ', score: 0 },
      B: { text: ' Sin ', score: 0 },
      C: { text: ' Stealing', score: 1 },
    },
  },
  {
    question: 'AB is to dc as SR is to:',
    options: {
      A: { text: ' qp ', score: 0 },
      B: { text: ' pq ', score: 1 },
      C: { text: ' tu', score: 0 },
    },
  },
  {
    question: 'When people are unreasonable, I just:',
    options: {
      A: { text: ' Keep quiet ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' Despise them', score: 0 },
    },
  },
  {
    question: 'If people talk loudly while I am listening to music I:',
    options: {
      A: { text: ' Can keep my mind on the music and not be bothered ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Find it spoils my enjoyment and annoys me', score: 0 },
    },
  },
  {
    question: 'I think I am better described as:',
    options: {
      A: { text: ' Polite and quiet ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Forceful', score: 2 },
    },
  },
  {
    question: 'I attend social functions only when I have to, and stay away any other time:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'To be cautious, and expect little is better than to be happy at heart, always expecting success:',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'In thinking of difficulties in my work, I:',
    options: {
      A: { text: ' Try to plan ahead, before I meet them', score: 2 },
      B: { text: 'In between ', score: 1 },
      C: { text: 'Assume I can handle them when they come', score: 0 },
    },
  },
  {
    question: 'I find it easy to mingle among people at a social gathering:',
    options: {
      A: { text: ' True ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 0 },
    },
  },
  {
    question: 'When a bit of diplomacy and persuasion are needed to get people moving, I am generally the one asked to do it:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'It would be more interesting to be:',
    options: {
      A: { text: ' A guidance worker helping young people find jobs ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' A manager in efficiency engineering', score: 0 },
    },
  },
  {
    question: 'If I am quite sure that a person is unjust or behaving selfishly, I show him up, even if it takes some trouble.',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I sometimes make foolish remarks in fun, just to surprise people and see what they will say.',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I would enjoy being a newspaper writer on drama, concerts, opera:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I never feel the urge to doodle and fidget when kept sitting still at a meeting:',
    options: {
      A: { text: ' True ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 0 },
    },
  },
  {
    question: 'If someone tells me something which I know is wrong, I am more likely to say to myself:',
    options: {
      A: { text: ' He is a liar ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Apparently he is misinformed', score: 0 },
    },
  },
  {
    question: 'I feel some punishment is coming to me even when I have done nothing wrong:',
    options: {
      A: { text: ' Often ', score: 2 },
      B: { text: ' Occasionally ', score: 1 },
      C: { text: ' Never', score: 0 },
    },
  },
  {
    question: 'The idea that sickness comes much from mental as physical causes is much exaggerated:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'The pomp and splendour of any big state ceremony are things which should be preserved:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'It bothers me if people think I am being unconventional or  odd:',
    options: {
      A: { text: ' A lot ', score: 0 },
      B: { text: ' Somewhat ', score: 1 },
      C: { text: ' Not at all', score: 2 },
    },
  },
  {
    question: 'In constructing something I would rather work:',
    options: {
      A: { text: ' With a committee ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' On my own', score: 2 },
    },
  },
  {
    question: "I have periods when it's hard to stop a mood of self pity:",
    options: {
      A: { text: ' Often ', score: 0 },
      B: { text: ' Occasionally', score: 1 },
      C: { text: ' Never', score: 2 },
    },
  },
  {
    question: 'Often I get angry with people too quickly:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I can always change old habits without difficulty and without slipping back:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'If the earnings were the same, I would rather be:',
    options: {
      A: { text: ' A lawyer ', score: 2 },
      B: { text: ' Uncertain', score: 1 },
      C: { text: 'A navigator or pilot', score: 0 },
    },
  },
  {
    question: "'Better' is to 'worst' as 'Slower' is to:",
    options: {
      A: { text: ' Fast ', score: 0 },
      B: { text: ' Best ', score: 0 },
      C: { text: ' Quickest', score: 1 },
    },
  },
  {
    question: 'Which of the following should come next to the end of this row of letters: xooooxxoooxxx ?’',
    options: {
      A: { text: ' oxxx ', score: 0 },
      B: { text: ' ooxx ', score: 1 },
      C: { text: ' xooo', score: 0 },
    },
  },
  {
    question: 'When the time comes for something I have planned and looked forward to, I occasionally do not feel up to going:',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'I can work carefully on most things without being bothered by people making a lot of noise around me:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I occasionally tell strangers things that seem to me important, regardless of whether they ask about them:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I spend much of my spare time talking with friends about social events enjoyed in the past:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: " I enjoy doing 'daring', 'foolhardy things' just for fun:",
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I find the sight of an untidy room very annoying:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I consider myself a very sociable, outgoing person:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'In social contacts I:',
    options: {
      A: { text: ' Show my emotions as I wish ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Keep by emotions to myself', score: 0 },
    },
  },
  {
    question: 'I enjoy music that is:',
    options: {
      A: { text: ' Light, Dry and risk ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Emotional and sentimental', score: 2 },
    },
  },
  {
    question: 'I admire the beauty of a poem more than that of a well made gun:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'If a good remark of mine is passed by, I:',
    options: {
      A: { text: ' Let it go ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Give people a chance to hear it again', score: 2 },
    },
  },
  {
    question: 'I would like to work as a probation officer with criminals on parole:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'One should be careful about mixing with all kinds of strangers, since there are dangers of infection and so on:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'In travelling abroad, I would rather go on an expertly conducted tour than plan by myself the places I wish to visit:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I am properly regarded as only a plodding, half successful person:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'If people take advantage of my friendliness, I do not resent it and I soon forget:',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'If a hearted argument developed between other members taking part in a group discussion, I would:',
    options: {
      A: { text: " Like to see a 'winner' ", score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Wish that it would be smoothed over', score: 0 },
    },
  },
  {
    question: 'I like to do my planning alone, without interruptions and Suggestions from others:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I sometimes let my actions get swayed by feelings of jealousy:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: "I believe firmly 'the boss may not always be right, but he always has the right to be boss'",
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I get tense as I think of all the things lying ahead of me:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: "If people shout suggestions when I'm playing a game, it doesn't upset me:",
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'It would be more interesting to be:',
    options: {
      A: { text: ' An artist ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' a secretary running a club', score: 2 },
    },
  },
  {
    question: 'Which of the following words does not properly belong with others?',
    options: {
      A: { text: ' Any ', score: 1 },
      B: { text: ' Some ', score: 0 },
      C: { text: ' Most', score: 0 },
    },
  },
  {
    question: "'Flame' is to 'heat' as 'rose' is to:",
    options: {
      A: { text: ' Thorn ', score: 0 },
      B: { text: ' Red petals ', score: 0 },
      C: { text: ' Scent', score: 1 },
    },
  },
  {
    question: 'I have vivid dreams, disturbing my sleep:',
    options: {
      A: { text: ' Often ', score: 0 },
      B: { text: ' Occasionally ', score: 1 },
      C: { text: ' Practically never', score: 2 },
    },
  },
  {
    question: " If the odds are really against something's being a success, I still believe in taking the risk:",
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I like it when I know so well what the group has to do that I naturally become the one in command:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I would rather dress with quiet correctness than with eye- catching personal style:',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'An evening with a quiet hobby appeals to me more than a lively party:',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: "I close my mind to well meant suggestions of others, even though I know I shouldn't:",
    options: {
      A: { text: ' Occasionally ', score: 0 },
      B: { text: ' Hardly ever ', score: 1 },
      C: { text: ' Never', score: 2 },
    },
  },
  {
    question: 'I always make it a point, in deciding anything to refer to basic rules of right and wrong:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I somewhat dislike having a group watch me at work:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'Because it is not always possible to get things done by gradual, reasonable methods, it is sometimes necessary to use force:',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'In school I preferred (or prefer):',
    options: {
      A: { text: ' English ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' Mathematics/Arithmetic', score: 0 },
    },
  },
  {
    question: "I have sometimes been troubled by people's saying bad things behind my back, with no grounds at all:",
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'Talk with ordinary, habit bound, conventional people:',
    options: {
      A: { text: ' Is often quite interesting and has a lot to it ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Annoys me because it deals with trifles and lacks depth', score: 2 },
    },
  },
  {
    question: 'Some things make me so angry that I find it best not to speak:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'In education, it is more important to:',
    options: {
      A: { text: ' Give the child enough affection ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Have the child learn desirable habits and attitudes', score: 0 },
    },
  },
  {
    question: 'People regard me as a solid, undisturbed person, unmoved by ups and down in circumstances:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 2 },
    },
  },
  {
    question: 'I think society should let reason lead it to new customs and throw aside old habits or mere traditions:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I think it is more important in the modern world to solve:',
    options: {
      A: { text: ' The question of moral purpose ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' The political difficulties', score: 2 },
    },
  },
  {
    question: 'I Learn better by:',
    options: {
      A: { text: ' Reading a well written book ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' Joining a group discussion', score: 0 },
    },
  },
  {
    question: 'I like to go my own way instead of acting on approved rules:',
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'I like to wait till I am sure that what I am saying is correct, before I put forth an argument:',
    options: {
      A: { text: ' Always ', score: 2 },
      B: { text: ' Generally ', score: 1 },
      C: { text: " Only if it's practicable", score: 0 },
    },
  },
  {
    question: "Small things sometimes 'get on my nerves' unbearably, though I realize they are trivial:",
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: "I don't often say things on the spur of the moment that I greatly regret:",
    options: {
      A: { text: ' True ', score: 0 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' False', score: 2 },
    },
  },
  {
    question: 'If asked to work with a charity drive, I would:',
    options: {
      A: { text: ' Accept ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: " Politely say I'm too busy", score: 0 },
    },
  },
  {
    question: 'Which of the following words does not belong with others?',
    options: {
      A: { text: ' Wide ', score: 1 },
      B: { text: ' Zigzag ', score: 0 },
      C: { text: ' Straight', score: 0 },
    },
  },
  {
    question: "'Soon' is to 'never' as 'near' is to:",
    options: {
      A: { text: ' Nowhere ', score: 1 },
      B: { text: ' Far ', score: 0 },
      C: { text: ' Away', score: 0 },
    },
  },
  {
    question: 'If I make an awkward social mistake, I can forget it:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: "I am known as an 'idea man' who almost always puts forward some ideas on a problem:",
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I think I am better at showing:',
    options: {
      A: { text: ' Nerve in meeting challenges ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: " Tolerance of other people's wishes", score: 0 },
    },
  },
  {
    question: 'I am considered a very enthusiastic person:',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I like a job that offers change, variety and travel, even if it in involves some danger',
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I am a fairly strict person, insisting on always doing things as correctly as possible:',
    options: {
      A: { text: ' True ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' False', score: 0 },
    },
  },
  {
    question: 'I enjoy work that requires conscientious, exacting skills:',
    options: {
      A: { text: ' Yes  ', score: 2 },
      B: { text: ' In between ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: "I'm the energetic type who keeps busy:",
    options: {
      A: { text: ' Yes ', score: 2 },
      B: { text: ' Uncertain ', score: 1 },
      C: { text: ' No', score: 0 },
    },
  },
  {
    question: 'I am sure there are no questions that I have skipped or failed to answer properly:',
    options: {
      A: { text: ' Yes ', score: 0 },
      B: { text: ' Uncertain ', score: 0 },
      C: { text: ' No', score: 0 },
    },
  },
];
