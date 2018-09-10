### World Cup Game

This is a small project i was working on for the world cup. It is an add on script for google sheets.

### The rules

We had four people that took 8 teams each. Every match the one 
that had the winning team on their list gets 3 points added on to their tally.
The final winner gets an additional 3 points for a total of 6 points to their tally. 
After the world cup is over, the winner will be decided based on their points. 


### How it works

I made this sheet because i didn't want to manually update it after every game. 
We made [this sheet](https://docs.google.com/spreadsheets/d/1FNtCHZNK-3uyN4KBqbVBnlLAeWoSYRE6aAMPH_WPwSg/edit#gid=0) to keep scores. I made a
very simple script that will automatically update scores based on the data parsed from tables from line 13 to line 117. The tables are updated from 
[This website](http://terrikon.com/soccer/worldcup-2018) every few minutes by using googles web scraping function. The sheet has been set to update
every five minutes or everytime the sheet is opened. The function will loop through all the table set values and update the scores accordingly.

### What i learned and next steps

I primarily built this script, because i wanted to automate the process, but i learned techinques such as, web scraping and google script language. 
I also have plans to built a full scale android app based on the rules of the game. Inital plans will include soccer competitions like the Champions League,
La Liga and English premier league. After that, i will try to expand to other sports like the NBA, MLS, MLB and NFL. 
