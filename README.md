# WEB102 Prework - Super Sea Monster

Submitted by: Brette Fitzgibbon

Super Sea Monster is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: 12 hours spent in total

## Required Features

The following **required** functionality is completed:

* [ ] The introduction section explains the background of the company and how many games remain unfunded.
* [ ] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [ ] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [ ] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features and stylistic updates are implemented:

* A Games link in the navbar takes the user directly down to the Our Games section. 
* The background color of the stats container and each game card is a shade of turquoise for more pizazz. 
* The hover box shadow color of the stats container and each game card is black for a more dramatic effect.
* Each game name is in bold, has a cursive font called Dancing Script, and is the larger size of 30px. 
* The background color of the buttons is light blue to match the header/navbar. 

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

https://youtu.be/sPbA3WbTgzc 

## Notes

The biggest challenges for while building this app were:
-- Spacing the header and the Games link cleanly in the navbar. Initially, the Games link appeared right next to "Sea Monster Crowdfunding" without even a single space between the two. I was able to fix this issue with flexbox: flex-direction row, justify-content space-between, align-items center, and a gap of 20px. I also used flex: 0 0 auto on the header image and text and the navbar link. This prevented them from growing or shrinking to fill available space, which made sure they were not pushed together. 
-- Styling only the names of each game. I was unsure about how to isolate the names from the other properties of each game, as there didn't seem to be an easy way to do it in the HTML file. I ended up using the index.js file. Inside the addGamesToPage function, where I was already creating gameCard elements with games.js data, I added a game-name class to the header containing the game name in the inner HTML of each gameCard, then styled this class in the CSS file. 

## License

    Copyright 2025 Sea Monster Crowdfunding 

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
