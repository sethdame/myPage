function Vector(t,i,e){this.x=t,this.y=i,this.z=e,this.set=function(t,i){this.x=t,this.y=i}}function PointCollection(){this.mousePos=new Vector(0,0),this.pointCollectionX=0,this.pointCollectionY=0,this.points=[],this.update=function(){for(var t=0;t<this.points.length;t++){var i=this.points[t],e=this.mousePos.x-i.curPos.x,n=this.mousePos.y-i.curPos.y,s=e*e+n*n,o=Math.sqrt(s);i.targetPos.x=150>o?i.curPos.x-e:i.originalPos.x,i.targetPos.y=150>o?i.curPos.y-n:i.originalPos.y,i.update()}},this.shake=function(){for(var t=(Math.floor(5*Math.random())-2,0);t<this.points.length;t++){var i=this.points[t],e=this.mousePos.x-i.curPos.x,n=this.mousePos.y-i.curPos.y,s=e*e+n*n,o=Math.sqrt(s);50>o&&(this.pointCollectionX=Math.floor(5*Math.random())-2,this.pointCollectionY=Math.floor(5*Math.random())-2),i.draw(bubbleShape,this.pointCollectionX,this.pointCollectionY)}},this.draw=function(t,i){for(var e=0;e<this.points.length;e++){var n=this.points[e];null!==n&&(window.reset&&(this.pointCollectionX=0,this.pointCollectionY=0,this.mousePos=new Vector(0,0)),n.draw(t,this.pointCollectionX,this.pointCollectionY,i))}},this.reset=function(){}}function Point(t,i,e,n,s){this.curPos=new Vector(t,i,e),this.color=s,this.friction=document.Friction,this.rotationForce=document.rotationForce,this.springStrength=.1,this.originalPos=new Vector(t,i,e),this.radius=n,this.size=n,this.targetPos=new Vector(t,i,e),this.velocity=new Vector(0,0,0),this.update=function(){var t=this.targetPos.x-this.curPos.x,i=this.targetPos.y-this.curPos.y,e=t*this.springStrength-this.rotationForce*i,n=i*this.springStrength+this.rotationForce*t;this.velocity.x+=e,this.velocity.x*=this.friction,this.curPos.x+=this.velocity.x,this.velocity.y+=n,this.velocity.y*=this.friction,this.curPos.y+=this.velocity.y;var s=this.originalPos.x-this.curPos.x,o=this.originalPos.y-this.curPos.y,a=s*s+o*o,r=Math.sqrt(a);this.targetPos.z=r/100+1;var d=this.targetPos.z-this.curPos.z,l=d*this.springStrength;this.velocity.z+=l,this.velocity.z*=this.friction,this.curPos.z+=this.velocity.z,this.radius=this.size*this.curPos.z,this.radius<1&&(this.radius=1)},this.draw=function(t,i,e){ctx.fillStyle=this.color,"square"==t?(ctx.beginPath(),ctx.fillRect(this.curPos.x+i,this.curPos.y+e,1.5*this.radius,1.5*this.radius)):(ctx.beginPath(),ctx.arc(this.curPos.x+i,this.curPos.y+e,this.radius,0,2*Math.PI,!0),ctx.fill())}}function makeColor(t){var i=t[0],e=t[1],n=t[2];return"hsl("+i+","+e+"%,"+n+"%)"}function phraseToHex(t){for(var i="",e=0;e<t.length;e++)i+=t.charCodeAt(e).toString(16);return i}function initEventListeners(){$(window).bind("resize",updateCanvasDimensions).bind("mousemove",onMove),canvas.ontouchmove=function(t){t.preventDefault(),onTouchMove(t)},canvas.ontouchstart=function(t){t.preventDefault()}}function updateCanvasDimensions(){canvas.attr({height:500,width:1e3}),canvasWidth=canvas.width(),canvasHeight=canvas.height(),draw()}function onMove(t){pointCollection&&pointCollection.mousePos.set(t.pageX-canvas.offset().left,t.pageY-canvas.offset().top)}function onTouchMove(t){pointCollection&&pointCollection.mousePos.set(t.targetTouches[0].pageX-canvas.offset().left,t.targetTouches[0].pageY-canvas.offset().top)}function bounceName(){shake(),setTimeout(bounceName,30)}function bounceBubbles(){draw(),update(),setTimeout(bounceBubbles,30)}function draw(t){var i=canvas.get(0);null!==i.getContext&&(ctx=i.getContext("2d"),ctx.clearRect(0,0,canvasWidth,canvasHeight),bubbleShape="undefined"!=typeof bubbleShape?bubbleShape:"circle",pointCollection&&pointCollection.draw(bubbleShape,t))}function shake(){var t=canvas.get(0);null!==t.getContext&&(ctx=t.getContext("2d"),ctx.clearRect(0,0,canvasWidth,canvasHeight),bubbleShape="undefined"!=typeof bubbleShape?bubbleShape:"circle",pointCollection&&pointCollection.shake(bubbleShape))}function update(){pointCollection&&pointCollection.update()}function drawName(t,i){function e(t,e,o){if("undefined"!=typeof o?("[object Array]"===Object.prototype.toString.call(o)&&"[object Array]"===Object.prototype.toString.call(o[0])&&(i=o),"[object Array]"===Object.prototype.toString.call(o)&&"number"==typeof o[0]&&(i=[o])):i=[[0,0,27]],document.alphabet.hasOwnProperty(t)){for(var a=document.alphabet[t].P,r=i[e%i.length],d=0;d<a.length;++d)point=a[d],n.push(new Point(point[0]+s,point[1],0,point[2],makeColor(r,point[3])));s+=document.alphabet[t].W}}updateCanvasDimensions();for(var n=[],s=0,o=phraseToHex(t),a=-1,r=0;r<o.length;r+=2){var d="A"+o.charAt(r)+o.charAt(r+1);"A20"!=d&&a++,e(d,a,i)}for(var l=0;l<n.length;l++)n[l].curPos.x=canvasWidth/2-s/2+n[l].curPos.x,n[l].curPos.y=canvasHeight/2-105+n[l].curPos.y,n[l].originalPos.x=canvasWidth/2-s/2+n[l].originalPos.x,n[l].originalPos.y=canvasHeight/2-105+n[l].originalPos.y;pointCollection=new PointCollection,pointCollection.points=n,initEventListeners()}document.alphabet={A79:{W:75,P:[[64,89,9,-102],[57,103,9,-102],[5,89,9,-79],[16,104,8,-35],[51,122,8,-35],[23,118,8,-35],[31,133,8,50],[46,136,8,50],[34,153,8,69],[28,168,7,112],[21,183,7,112]]},A78:{W:85,P:[[10,148,8,-103],[21,137,8,-92],[33,125,7,-79],[50,124,7,-35],[58,135,7,-35],[68,148,7,-35],[40,111,7,51],[33,103,7,51],[21,86,7,51],[56,106,7,51],[67,92,7,112]]},A77:{W:98,P:[[24,148,10,-102],[67,151,10,-102],[34,133,9,-36],[61,134,9,-36],[76,132,8,-36],[16,130,8,-36],[14,112,7,50],[40,118,7,50],[58,117,7,50],[82,117,7,83],[86,100,7,83],[51,101,7,83],[11,95,7,83]]},A76:{W:70,P:[[12,88,9,-84],[32,138,5,-84],[36,148,9,-84],[44,133,8,-84],[60,84,6,119],[57,96,6,102],[53,107,6,50],[50,120,7,-35],[26,115,7,51],[29,127,6,69],[20,101,8,11]]},A75:{W:75,P:[[58,148,9,-103],[60,128,8,-84],[38,150,8,-35],[21,147,7,-35],[61,109,7,-35],[17,128,7,42],[13,110,7,80],[62,92,7,80],[14,90,7,80]]},A74:{W:68,P:[[33,149,9,-103],[35,130,9,-79],[34,108,9,-36],[33,90,8,5],[48,89,8,50],[14,89,8,56],[34,68,8,112]]},A73:{W:70,P:[[10,143,8,-103],[23,150,8,-92],[44,149,8,-79],[57,135,8,-38],[44,122,8,-35],[25,114,8,39],[17,98,7,39],[33,91,7,56],[45,88,7,102],[57,91,7,102]]},A72:{W:69,P:[[58,105,7,-102],[56,88,8,-35],[42,91,7,51],[29,96,7,91],[16,90,7,91],[18,105,8,37],[17,120,7,-50],[17,134,6,-79],[17,149,8,-102]]},A71:{W:75,P:[[51,182,10,-103],[51,159,9,-79],[55,138,9,-79],[35,149,8,-35],[18,143,7,11],[58,123,7,11],[12,126,7,50],[57,103,7,69],[16,109,6,69],[26,95,6,69],[49,88,6,69],[37,88,6,119]]},A70:{W:77,P:[[15,88,10,-103],[18,108,9,-91],[31,97,9,-50],[18,126,8,-50],[45,96,7,-35],[57,103,7,5],[17,143,7,5],[60,117,7,56],[60,131,7,56],[20,158,7,50],[51,143,7,50],[31,148,6,102],[17,172,6,102],[16,186,5,119]]},A6d:{W:111,P:[[15,148,10,-102],[58,152,10,-102],[98,151,10,-50],[98,134,9,-50],[56,133,9,-50],[15,129,8,11],[94,116,8,11],[56,113,8,11],[14,111,7,51],[15,93,7,51],[25,105,7,51],[55,98,7,51],[89,99,7,83],[77,92,7,112],[36,94,7,112]]},A6e:{W:75,P:[[17,148,10,-92],[62,149,10,-92],[17,125,9,-50],[62,127,9,-35],[61,107,8,29],[23,104,8,69],[15,86,7,69],[36,94,7,69],[55,92,7,69]]},A6f:{W:76,P:[[24,147,10,-103],[46,149,9,-84],[14,129,9,-50],[58,134,8,-35],[18,107,8,29],[61,114,7,51],[56,98,7,51],[31,92,7,102],[45,91,7,102]]},A6a:{W:58,P:[[34,62,10,-92],[35,95,9,-92],[37,117,8,-35],[38,133,8,-35],[37,152,8,37],[36,168,8,56],[29,185,7,56],[14,181,6,112],[6,170,5,119]]},A6b:{W:78,P:[[19,148,8,-84],[20,131,7,-84],[68,149,10,-84],[58,134,8,-84],[50,123,6,-84],[65,83,6,-35],[21,44,7,51],[21,59,6,83],[21,72,5,112],[21,85,6,112],[21,99,6,69],[53,99,5,102],[59,90,6,50],[42,110,10,29],[20,115,7,-35],[31,122,5,5]]},A6c:{W:40,P:[[20,150,10,56],[22,52,10,56],[20,71,9,-35],[21,133,8,-50],[21,88,7,-84],[21,120,6,-103],[20,104,6,-103]]},A68:{W:83,P:[[18,149,10,-102],[69,147,10,-102],[18,131,9,-36],[64,126,8,-36],[65,109,8,-36],[19,109,8,51],[57,93,7,69],[39,94,8,37],[20,89,8,37],[18,69,8,91],[17,52,7,119]]},A69:{W:41,P:[[23,60,10,-92],[22,91,9,-36],[21,111,8,39],[19,130,7,56],[21,148,6,112]]},A64:{W:84,P:[[68,147,10,-103],[45,151,9,-92],[22,145,9,-50],[15,124,8,-50],[17,104,8,39],[29,91,8,39],[46,90,8,39],[59,96,8,-50],[67,129,8,-50],[68,110,8,69],[68,83,7,69],[70,68,7,102],[71,47,7,119]]},A65:{W:79,P:[[16,127,10,-103],[23,145,9,-50],[41,151,8,11],[54,148,7,102],[70,142,6,119],[61,96,7,51],[54,109,7,51],[44,90,8,51],[41,117,8,-50],[27,92,8,-50],[17,107,8,-50]]},A66:{W:73,P:[[29,156,10,-103],[31,136,9,-84],[31,116,9,-50],[30,95,8,-35],[45,93,7,-35],[58,92,7,39],[14,95,7,39],[33,79,7,69],[36,67,7,69],[47,55,7,69],[65,52,6,119]]},A67:{W:76,P:[[61,97,10,-102],[61,118,9,-102],[42,90,9,-79],[24,97,8,-35],[53,137,8,-35],[12,110,8,-35],[40,148,7,29],[26,151,7,42],[11,124,6,56],[13,139,6,83],[60,156,7,-50],[54,172,7,50],[42,185,7,69],[25,187,7,102],[7,183,7,119]]},A61:{W:74,P:[[58,94,8,42],[45,89,7,69],[31,91,7,119],[20,99,7,91],[12,111,7,51],[11,124,8,-35],[29,151,8,-35],[45,149,7,-35],[65,153,6,-35],[57,126,6,-35],[57,112,6,-102],[58,142,8,-102],[15,140,9,-102]]},A62:{W:85,P:[[17,143,8,-102],[31,148,8,-102],[44,152,7,-102],[60,147,6,-36],[67,133,6,-36],[73,116,6,39],[65,98,6,83],[56,90,6,119],[42,89,6,51],[30,93,7,11],[17,102,8,-35],[18,124,10,-72],[17,79,7,51],[17,60,7,51],[17,47,7,102]]},A63:{W:74,P:[[24,142,9,-103],[37,152,8,-38],[54,150,7,50],[66,143,6,56],[14,123,8,-79],[20,106,7,5],[32,92,6,29],[47,88,6,102],[59,94,6,102]]},A7e:{W:86,P:[[13,113,5,-103],[22,103,5,-103],[31,96,5,11],[40,98,5,11],[44,108,5,11],[52,115,7,11],[66,116,7,11],[72,99,9,11]]},A7d:{W:53,P:[[42,115,9,-103],[31,104,7,5],[30,86,7,5],[30,72,7,5],[25,57,7,5],[32,128,7,5],[30,144,7,5],[27,158,7,5],[24,170,7,5],[11,174,5,112],[12,51,5,112]]},A7c:{W:61,P:[[33,41,5,-161],[33,53,5,5],[31,65,5,5],[32,79,5,69],[32,92,5,69],[31,107,5,112],[30,122,5,50],[29,136,5,-50],[28,147,5,-50],[28,159,5,-91],[27,171,5,-91]]},A7b:{W:53,P:[[6,115,10,-50],[20,105,7,-50],[20,89,7,-50],[20,73,7,-50],[22,58,7,-50],[18,126,7,-50],[20,140,7,-50],[21,152,7,-50],[23,166,6,80],[31,172,6,80],[44,172,6,80],[33,49,6,80],[47,49,6,80]]},A7a:{W:77,P:[[19,152,10,-103],[37,150,9,-79],[53,150,8,-35],[31,132,8,-35],[42,121,7,50],[53,109,7,50],[61,92,7,50],[40,89,7,83],[23,89,7,112]]},A4f:{W:114,P:[[40,147,10,-102],[82,142,10,-102],[16,119,9,-72],[63,151,9,-72],[22,136,8,11],[91,122,8,11],[17,96,8,11],[97,108,7,11],[97,89,7,11],[24,78,7,69],[94,71,7,69],[40,66,6,69],[54,60,6,69],[87,60,6,112],[73,59,6,112]]},A4d:{W:126,P:[[38,60,10,-72],[92,59,10,-72],[112,150,8,-72],[83,75,5,-72],[81,87,6,-72],[78,100,6,-72],[74,113,6,-72],[69,128,7,-72],[54,129,7,-72],[50,113,6,-72],[46,100,5,-72],[43,86,6,-72],[31,78,7,-72],[43,74,6,112],[28,94,8,-72],[16,150,10,-72],[20,131,9,51],[23,113,8,69],[103,106,6,119],[100,93,6,56],[104,119,7,83],[108,134,8,39],[97,79,7,50],[61,146,9,112]]},A4e:{W:114,P:[[16,151,8,-91],[19,55,8,-91],[95,59,8,-91],[98,147,8,-91],[98,132,7,-91],[16,133,7,-91],[17,71,7,-91],[100,72,7,5],[101,119,7,5],[103,86,7,5],[17,119,7,5],[84,138,7,5],[74,126,7,5],[32,68,6,56],[37,80,6,56],[45,90,6,56],[63,112,6,56],[101,102,6,56],[17,108,6,112],[54,101,6,112],[18,93,6,112],[16,81,6,112]]},A4b:{W:88,P:[[24,155,9,-92],[78,150,9,-92],[23,135,8,-92],[61,136,8,-92],[46,126,8,-36],[22,117,8,-36],[36,110,8,5],[22,95,7,50],[43,92,7,50],[52,82,7,50],[21,78,7,83],[23,59,7,83],[67,71,7,83],[75,57,7,83]]},A4c:{W:79,P:[[16,152,9,-50],[15,135,8,-50],[16,118,8,-50],[17,86,7,-50],[19,71,6,-50],[18,55,7,-50],[68,145,10,-50],[56,148,9,69],[44,151,7,119],[32,153,7,50],[17,101,7,69]]},A4a:{W:95,P:[[32,55,10,-103],[84,57,9,-84],[49,59,9,-84],[65,58,8,-36],[60,71,8,-36],[60,90,8,11],[61,105,8,11],[55,126,8,50],[54,141,7,56],[46,153,7,56],[28,151,7,112],[14,136,7,112]]},A51:{W:125,P:[[113,176,10,-92],[97,161,9,-92],[82,147,9,-92],[64,133,7,-50],[97,136,7,-50],[62,154,7,-35],[106,120,7,-35],[41,151,6,11],[108,103,6,11],[24,142,6,11],[103,88,6,11],[15,124,6,50],[97,73,6,50],[12,107,6,50],[15,94,6,69],[84,61,6,69],[24,80,6,69],[35,71,5,112],[71,57,5,112],[55,58,5,112],[43,63,5,112]]},A50:{W:75,P:[[49,56,5,-161],[56,65,5,-102],[62,78,5,-102],[34,54,6,-102],[56,93,6,-72],[17,51,6,-72],[17,64,6,-72],[49,100,6,11],[34,104,6,11],[15,78,7,11],[19,96,7,11],[16,111,7,83],[13,125,7,83],[13,140,7,83]]},A53:{W:99,P:[[18,139,8,-84],[32,149,7,-84],[47,150,6,-84],[65,146,6,-84],[79,138,6,50],[86,126,6,50],[81,112,6,50],[69,103,6,102],[58,101,6,102],[44,98,6,102],[30,92,7,50],[29,76,6,5],[42,63,6,5],[56,62,6,-84],[70,60,6,-84],[81,64,6,-84]]},A52:{W:90,P:[[17,148,8,-161],[17,134,7,39],[17,120,8,-72],[18,71,8,-72],[19,57,10,-72],[51,63,8,-72],[64,72,8,-72],[30,114,8,-72],[42,124,5,-72],[54,127,6,-72],[64,134,7,-72],[75,145,8,-72],[73,85,8,51],[70,98,8,119],[59,108,8,83],[46,114,8,56],[18,86,8,102],[18,103,9,51],[35,59,9,11]]},A55:{W:105,P:[[34,145,9,-92],[51,151,8,-92],[20,128,7,-92],[67,145,7,-50],[19,107,7,-35],[80,137,7,37],[86,122,7,37],[18,88,7,37],[89,105,6,80],[19,68,6,80],[88,87,6,80],[91,70,6,119]]},A54:{W:97,P:[[14,57,9,-102],[92,59,9,-102],[54,144,9,-50],[55,125,8,-50],[75,60,7,29],[30,59,7,29],[58,59,6,29],[46,59,6,51],[51,72,6,69],[53,109,6,69],[53,97,6,102],[53,85,6,119]]},A57:{W:148,P:[[45,143,10,-72],[78,62,10,-72],[100,150,10,-72],[137,58,10,-72],[92,133,9,-72],[54,126,9,-72],[37,126,9,-72],[67,81,9,-72],[82,81,8,-72],[59,112,8,-72],[63,97,7,-72],[33,109,7,-72],[87,99,7,-72],[120,104,7,119],[113,120,8,112],[127,90,8,83],[132,76,9,39],[109,134,9,56],[88,118,7,69],[23,76,9,112],[30,91,8,51],[20,58,10,50]]},A56:{W:93,P:[[47,146,10,-72],[38,128,9,-72],[33,111,8,-72],[26,81,8,-72],[22,66,7,-72],[19,54,8,-72],[56,130,8,-72],[86,55,8,-72],[77,70,8,42],[72,85,8,56],[66,100,8,119],[61,115,8,56],[30,96,8,56]]},A59:{W:91,P:[[8,59,9,-102],[77,58,9,-102],[34,151,8,-50],[43,135,8,-50],[71,73,7,5],[18,71,7,5],[25,80,7,50],[63,89,7,50],[34,95,7,50],[48,121,6,102],[57,102,6,102],[39,109,6,102]]},A58:{W:103,P:[[11,149,8,-103],[23,140,8,-103],[87,148,8,-84],[76,134,7,-50],[69,121,7,-50],[34,126,7,-50],[45,114,6,5],[62,109,6,5],[53,99,6,29],[65,92,6,29],[41,86,6,69],[76,77,6,69],[32,78,6,69],[87,64,6,69],[25,64,6,69],[14,57,6,69],[94,55,6,69]]},A5a:{W:99,P:[[15,146,10,-92],[89,148,10,-92],[33,149,9,-92],[52,150,9,-92],[69,150,8,-36],[27,129,8,-36],[38,112,7,11],[47,97,7,11],[57,87,7,56],[67,74,7,56],[79,68,7,56],[91,61,7,119],[15,56,7,-35],[29,58,7,11],[45,60,7,50],[61,58,7,112],[75,55,7,56]]},A5c:{W:79,P:[[19,58,5,-35],[25,67,5,-35],[31,76,6,-35],[35,86,6,-35],[40,95,7,-35],[45,106,6,-35],[48,116,6,-35],[54,125,6,-35],[58,136,5,-35],[63,146,5,-35],[65,152,5,-35]]},A5b:{W:55,P:[[40,57,5,-35],[31,58,5,-35],[20,57,8,-35],[20,72,8,-35],[20,85,8,-35],[20,100,8,-35],[20,115,8,-35],[20,127,8,-35],[19,144,8,-35],[17,160,8,-35],[17,175,8,-35],[29,177,6,-35],[41,176,5,-35]]},A5e:{W:83,P:[[20,70,9,-79],[65,68,9,-79],[33,58,7,50],[52,58,7,50],[42,48,6,112]]},A5d:{W:55,P:[[20,58,5,-35],[30,58,5,-35],[40,58,8,-35],[41,74,8,-35],[41,92,8,-35],[41,109,8,-35],[41,127,8,-35],[41,144,8,-35],[40,159,8,-35],[40,172,8,-35],[27,174,6,-35],[15,175,6,-35]]},A5f:{W:90,P:[[0,172,5,-35],[11,171,5,-35],[21,169,5,-35],[33,172,5,-35],[45,172,5,-35],[55,170,5,-35],[66,172,5,-35],[74,170,5,-35],[85,170,5,-35]]},A46:{W:87,P:[[20,149,9,-103],[20,128,8,-84],[20,108,8,-84],[33,98,8,-36],[20,86,8,-36],[51,96,7,29],[68,98,7,29],[21,63,7,56],[35,54,7,56],[52,54,7,112],[68,53,7,112]]},A47:{W:97,P:[[25,148,8,-103],[61,145,8,-103],[16,109,8,-79],[43,151,8,-79],[15,132,7,-36],[77,132,7,-36],[23,83,7,37],[83,110,7,37],[36,66,6,37],[49,53,6,37],[67,106,6,56],[53,112,6,56],[63,57,6,112],[40,114,6,112],[76,59,6,112]]},A44:{W:103,P:[[19,148,8,-161],[34,154,8,-79],[60,149,8,-36],[80,141,7,-36],[86,123,7,29],[20,128,8,-92],[20,110,8,-92],[21,91,8,-50],[21,73,8,5],[23,57,8,42],[37,63,8,51],[52,70,7,69],[66,78,7,69],[86,109,7,112],[79,90,7,112]]},A45:{W:89,P:[[19,149,10,-102],[18,103,10,-102],[22,55,9,-72],[17,126,9,-72],[20,79,8,5],[36,155,8,5],[38,101,8,5],[40,52,7,50],[54,157,7,50],[53,100,7,50],[56,53,7,91],[71,155,7,91],[70,99,7,91],[73,51,7,91]]},A42:{W:90,P:[[26,56,9,-102],[22,68,5,-102],[23,79,5,-102],[21,92,5,-84],[22,103,6,-50],[20,114,6,-50],[22,125,6,91],[22,137,6,91],[32,104,7,-35],[24,151,7,-35],[48,148,7,-35],[68,115,7,-35],[35,152,6,51],[43,110,6,51],[61,144,6,51],[76,124,6,51],[72,137,9,119],[52,107,9,-79],[66,81,7,80],[66,92,9,11],[42,52,9,42],[64,64,9,-102],[55,54,6,-102]]},A43:{W:86,P:[[77,69,8,-103],[76,56,7,56],[64,60,7,119],[50,61,7,29],[30,78,7,-72],[23,88,7,-35],[17,100,8,-35],[15,116,8,50],[39,69,6,83],[17,131,9,-72],[29,145,9,-72],[46,147,8,29],[61,142,8,83],[72,134,8,-103]]},A40:{W:132,P:[[95,150,7,51],[81,154,8,11],[64,156,9,11],[46,151,9,-79],[29,140,9,-79],[20,123,9,-103],[17,104,9,-103],[19,85,9,50],[28,68,9,56],[41,55,9,80],[58,49,9,112],[75,51,8,119],[91,56,8,91],[104,66,8,51],[113,80,8,50],[113,97,8,5],[107,113,8,-36],[90,118,9,-36],[75,113,7,-36],[68,108,5,5],[60,115,7,-79],[47,114,7,-79],[42,102,7,-103],[47,91,7,-35],[55,81,6,-35],[67,77,8,-103],[76,97,8,-79]]},A41:{W:104,P:[[88,148,10,-102],[29,118,10,-102],[68,57,5,-102],[23,134,8,11],[16,148,8,119],[39,103,8,51],[47,90,7,51],[55,77,7,51],[62,67,6,83],[76,95,5,-35],[77,107,6,-35],[73,83,5,83],[71,71,5,83],[79,121,7,-35],[84,134,8,-50],[65,111,6,-50],[52,114,6,-50]]},A48:{W:110,P:[[16,152,10,-103],[92,148,9,-91],[92,129,9,-91],[18,130,8,-50],[90,109,8,-50],[19,109,8,-50],[33,110,8,11],[53,106,8,11],[70,104,8,11],[94,90,8,51],[95,68,8,51],[18,85,7,102],[22,66,7,102],[22,47,7,102],[95,49,7,102]]},A49:{W:78,P:[[13,152,9,-103],[36,146,9,-84],[53,146,8,11],[68,145,8,11],[35,125,8,-36],[38,105,7,-36],[37,88,7,56],[38,72,7,56],[52,61,7,91],[65,60,7,119],[40,58,7,50],[24,58,6,-72],[12,59,6,-102]]},A33:{W:87,P:[[22,65,10,-35],[16,136,10,-35],[32,100,10,-35],[38,56,8,-35],[54,57,7,-35],[63,67,6,-35],[66,80,6,-35],[57,91,7,-35],[47,99,7,-35],[56,106,7,-35],[64,117,6,-35],[65,129,6,-35],[59,138,7,-35],[49,144,7,-35],[31,144,7,-35]]},A32:{W:87,P:[[69,148,10,-35],[51,149,9,-35],[33,149,9,-35],[14,149,8,-35],[19,133,8,-35],[28,118,8,-35],[42,109,8,-35],[56,100,7,-35],[66,88,7,-35],[68,73,7,-35],[60,57,6,-35],[47,56,6,-35],[34,57,6,-35],[24,65,6,-35],[16,72,6,-35]]},A31:{W:65,P:[[19,149,9,-35],[51,148,9,-35],[39,53,9,-35],[36,147,6,-35],[35,135,6,-35],[34,120,5,-35],[34,109,5,-35],[34,98,6,-35],[35,84,6,-35],[37,69,6,-35],[27,62,6,-35],[19,68,6,-35]]},A30:{W:87,P:[[67,138,10,-102],[48,148,10,-102],[73,117,9,-50],[74,95,9,-50],[22,144,8,11],[69,76,8,11],[15,126,8,11],[12,104,7,56],[58,63,7,56],[13,87,6,56],[46,57,6,56],[20,75,6,112],[27,64,6,112]]},A37:{W:87,P:[[26,152,10,-102],[36,133,9,-102],[47,116,9,-50],[57,100,9,5],[66,86,9,5],[80,70,8,56],[62,65,8,56],[44,63,7,56],[26,64,6,56],[11,64,6,56]]},A36:{W:87,P:[[65,145,10,-79],[46,151,9,-79],[70,127,8,-79],[66,111,8,-79],[26,148,7,-79],[52,100,7,-79],[18,131,7,11],[15,114,7,11],[37,97,7,51],[20,102,7,51],[23,86,7,51],[34,72,7,80],[44,61,7,112],[55,49,7,112]]},A35:{W:87,P:[[21,55,9,-50],[38,56,9,-50],[53,57,9,-50],[69,55,9,-50],[20,71,8,-50],[18,87,8,-50],[18,104,8,-50],[32,95,8,-50],[46,89,7,-50],[57,91,7,50],[64,101,7,50],[71,113,7,83],[69,127,7,83],[61,140,7,83],[49,146,6,83],[34,146,6,83],[22,140,6,83]]},A34:{W:87,P:[[10,117,9,-35],[25,118,9,-35],[39,117,9,-35],[55,117,9,-35],[70,117,9,-35],[61,98,8,-35],[61,78,7,-35],[61,58,7,-35],[46,68,7,-35],[36,82,7,-35],[27,94,7,-35],[61,136,7,-35],[61,149,7,-35]]},A39:{W:87,P:[[69,103,10,-103],[60,122,9,-92],[47,134,8,-50],[33,144,8,-50],[17,155,8,-50],[70,82,8,-50],[48,106,7,51],[64,68,7,51],[53,58,7,51],[34,107,7,51],[21,97,7,51],[17,82,7,51],[38,59,7,51],[26,65,7,51]]},A38:{W:87,P:[[43,98,10,-103],[61,90,8,-103],[58,105,8,-79],[27,107,8,-79],[24,91,7,-36],[67,73,7,-36],[21,75,7,-36],[29,61,7,-36],[58,61,6,102],[46,55,6,102],[17,118,7,37],[67,118,7,37],[69,131,7,37],[16,133,6,56],[66,142,6,56],[23,146,6,56],[33,151,6,56],[57,151,5,119],[46,154,5,119]]},A2a:{W:76,P:[[35,69,9,-103],[44,83,7,-35],[27,83,7,-35],[20,67,7,-35],[36,54,7,-35],[51,67,7,-35],[53,92,5,83],[17,92,5,83],[7,63,5,83],[35,42,5,83],[63,67,5,83]]},A2b:{W:69,P:[[32,109,10,-102],[32,92,6,37],[47,109,6,37],[32,126,6,37],[14,109,6,37],[33,137,6,37],[60,110,6,37],[32,79,6,37],[4,109,6,37]]},A2c:{W:41,P:[[30,150,10,-79],[24,164,7,50],[17,177,6,102]]},A2d:{W:60,P:[[12,118,9,-84],[29,117,8,69],[46,117,6,5]]},A2e:{W:37,P:[[19,152,6,-35]]},A2f:{W:74,P:[[14,154,10,-102],[23,133,9,-72],[34,114,9,5],[42,96,9,5],[50,77,8,83],[59,62,8,83]]},A20:{W:40,P:[]},A21:{W:35,P:[[17,151,9,-35],[18,50,8,-35],[17,67,8,-35],[17,85,7,-35],[18,100,6,-35],[18,114,5,-35],[19,128,5,-35]]},A22:{W:61,P:[[15,51,5,-35],[16,61,5,-35],[14,73,5,-35],[14,85,5,-35],[44,53,5,-35],[43,66,5,-35],[42,77,5,-35],[40,87,5,-35]]},A23:{W:120,P:[[31,120,9,-102],[79,120,9,-102],[90,79,9,-102],[43,80,9,-102],[48,120,7,29],[62,121,7,29],[83,103,7,29],[86,92,7,29],[73,79,7,29],[59,79,7,29],[26,79,7,29],[11,79,7,29],[47,64,7,29],[51,49,7,29],[94,62,7,29],[98,46,7,29],[107,79,7,29],[118,79,7,29],[92,121,7,29],[107,120,7,29],[75,137,7,29],[70,150,7,29],[28,135,7,29],[23,147,7,29],[37,104,7,29],[39,93,7,29],[17,121,7,29],[3,120,7,29]]},A24:{W:99,P:[[21,144,9,-35],[36,150,8,-35],[54,150,8,-35],[71,145,7,-35],[78,133,7,-35],[81,118,6,-35],[73,108,6,-35],[60,102,6,-35],[46,101,7,-35],[31,95,7,-35],[24,80,8,-35],[37,67,8,-35],[52,58,9,-35],[71,61,9,-35],[51,39,6,-35],[52,76,6,-35],[52,88,6,-35],[51,115,6,-35],[51,127,6,-35],[51,138,6,-35],[51,165,6,-35],[51,177,6,-35]]},A26:{W:94,P:[[80,151,10,-103],[68,134,9,11],[58,117,9,11],[48,98,9,11],[39,80,9,11],[32,99,7,91],[20,108,7,91],[11,120,6,91],[10,133,6,91],[17,143,5,91],[27,148,6,56],[40,150,6,-72],[54,147,6,-72],[76,123,6,-72],[81,108,6,-72],[56,81,6,-72],[63,69,5,-92],[60,57,5,-92],[47,52,5,-92],[44,63,5,-92]]},A27:{W:56,P:[[27,72,5,-35],[25,62,5,-35],[27,51,5,-35]]},A28:{W:53,P:[[39,177,10,-35],[41,49,10,-35],[27,63,9,-35],[17,80,8,-35],[25,168,8,-35],[14,152,8,-35],[10,135,7,-35],[10,120,7,-35],[13,93,7,-35],[9,108,7,-35]]},A29:{W:53,P:[[15,179,10,-92],[15,51,10,-92],[29,165,9,-35],[27,63,9,-35],[34,79,9,-35],[37,151,8,56],[41,133,8,56],[41,96,8,56],[44,113,7,119]]},A3c:{W:55,P:[[36,88,5,-35],[28,94,5,-35],[20,100,5,-35],[14,106,5,-35],[10,113,5,-35],[16,116,5,-35],[22,120,5,-35],[30,126,5,-35],[36,133,5,-35]]},A3b:{W:44,P:[[21,91,10,-79],[21,144,8,42],[11,155,6,102]]},A3a:{W:44,P:[[21,134,10,-79],[23,86,10,51]]},A3f:{W:75,P:[[24,150,10,-103],[10,68,9,11],[26,61,8,11],[41,61,8,11],[26,125,8,11],[36,117,7,11],[48,108,7,11],[57,99,6,11],[52,70,6,11],[59,84,6,11]]},A3e:{W:55,P:[[15,83,5,-35],[24,90,5,-35],[31,97,5,-35],[39,105,5,-35],[34,114,5,-35],[26,120,5,-35],[19,125,5,-35],[10,132,5,-35]]},A3d:{W:73,P:[[11,91,9,-50],[27,90,9,-50],[44,90,9,-50],[59,90,9,-50],[11,127,6,69],[21,128,6,69],[33,129,6,69],[44,129,6,69],[53,129,6,69]]}},function(t){t.fn.zAccordion=function(i){var e={timeout:6e3,width:null,slideWidth:null,tabWidth:null,height:null,startingSlide:0,slideClass:null,easing:null,speed:1200,auto:!0,trigger:"click",pause:!0,invert:!1,animationStart:function(){},animationComplete:function(){},buildComplete:function(){},errors:!1},n={displayError:function(t,i){window.console&&i&&console.log("zAccordion: "+t+".")},findChildElements:function(t){return void 0===t.children().get(0)?!1:!0},getNext:function(t,i){var e=i+1;return e>=t&&(e=0),e},fixHeight:function(t){return null===t.height&&void 0!==t.slideHeight?(t.height=t.slideHeight,!0):null!==t.height&&void 0===t.slideHeight?!0:null===t.height&&void 0===t.slideHeight?!1:void 0},getUnits:function(t){return null!==t?t.toString().indexOf("%")>-1?"%":(t.toString().indexOf("px")>-1,"px"):void 0},toInteger:function(t){return null!==t?parseInt(t,10):void 0},sizeAccordion:function(t,i){return void 0===i.width&&void 0===i.slideWidth&&void 0===i.tabWidth?(n.displayError("width must be defined",i.errors),!1):void 0!==i.width&&void 0===i.slideWidth&&void 0===i.tabWidth?i.width>100&&"%"===i.widthUnits?(n.displayError("width cannot be over 100%",i.errors),!1):(i.slideWidthUnits=i.widthUnits,i.tabWidthUnits=i.widthUnits,"%"===i.widthUnits?(i.tabWidth=100/(t.children().size()+1),i.slideWidth=100-(t.children().size()-1)*i.tabWidth):(i.tabWidth=i.width/(t.children().size()+1),i.slideWidth=i.width-(t.children().size()-1)*i.tabWidth),!0):void 0===i.width&&void 0!==i.slideWidth&&void 0===i.tabWidth?(n.displayError("width must be defined",i.errors),!1):void 0===i.width&&void 0===i.slideWidth&&void 0!==i.tabWidth?(n.displayError("width must be defined",i.errors),!1):void 0!==i.width&&void 0===i.slideWidth&&void 0!==i.tabWidth?i.widthUnits!==i.tabWidthUnits?(n.displayError("Units do not match",i.errors),!1):i.width>100&&"%"===i.widthUnits?(n.displayError("width cannot be over 100%",i.errors),!1):t.children().size()*i.tabWidth>100&&"%"===i.widthUnits||t.children().size()*i.tabWidth>i.width&&"px"===i.widthUnits?(n.displayError("tabWidth too large for accordion",i.errors),!1):(i.slideWidthUnits=i.widthUnits,i.slideWidth="%"===i.widthUnits?100-(t.children().size()-1)*i.tabWidth:i.width-(t.children().size()-1)*i.tabWidth,!0):void 0!==i.width&&void 0!==i.slideWidth&&void 0===i.tabWidth?i.widthUnits!==i.slideWidthUnits?(n.displayError("Units do not match",i.errors),!1):i.width>100&&"%"===i.widthUnits?(n.displayError("width cannot be over 100%",i.errors),!1):i.slideWidth>=i.width?(n.displayError("slideWidth cannot be greater than or equal to width",i.errors),!1):t.children().size()*i.slideWidth<100&&"%"===i.widthUnits||t.children().size()*i.slideWidth<i.width&&"px"===i.widthUnits?(n.displayError("slideWidth too small for accordion",i.errors),!1):(i.tabWidthUnits=i.widthUnits,i.tabWidth="%"===i.widthUnits?(100-i.slideWidth)/(t.children().size()-1):(i.width-i.slideWidth)/(t.children().size()-1),!0):void 0===i.width&&void 0!==i.slideWidth&&void 0!==i.tabWidth?(n.displayError("width must be defined",i.errors),!1):void 0!==i.width&&void 0!==i.slideWidth&&void 0!==i.tabWidth?(n.displayError("At maximum two of three attributes (width, slideWidth, and tabWidth) should be defined",i.errors),!1):void 0},timer:function(t){var i=t.data("next")+1;if(t.data("pause")&&t.data("inside")&&t.data("auto"))try{clearTimeout(t.data("interval"))}catch(e){}else if(t.data("pause")&&!t.data("inside")&&t.data("auto")){try{clearTimeout(t.data("interval"))}catch(n){}t.data("interval",setTimeout(function(){t.children(t.children().get(0).tagName+":nth-child("+i+")").trigger(t.data("trigger"))},t.data("timeout")))}else if(!t.data("pause")&&t.data("auto")){try{clearTimeout(t.data("interval"))}catch(s){}t.data("interval",setTimeout(function(){t.children(t.children().get(0).tagName+":nth-child("+i+")").trigger(t.data("trigger"))},t.data("timeout")))}}},s={init:function(i){var s,o=["slideWidth","tabWidth","startingSlide","slideClass","animationStart","animationComplete","buildComplete"];for(s=0;s<o.length;s+=1)void 0!==t(this).data(o[s].toLowerCase())&&(t(this).data(o[s],t(this).data(o[s].toLowerCase())),t(this).removeData(o[s].toLowerCase()));return i=t.extend(e,i,t(this).data()),this.length<=0?(n.displayError("Selector does not exist",i.errors),!1):n.fixHeight(i)?n.findChildElements(this)?i.speed>i.timeout?(n.displayError("Speed cannot be greater than timeout",i.errors),!1):(i.heightUnits=n.getUnits(i.height),i.height=n.toInteger(i.height),i.widthUnits=n.getUnits(i.width),i.width=n.toInteger(i.width),i.slideWidthUnits=n.getUnits(i.slideWidth),i.slideWidth=n.toInteger(i.slideWidth),i.tabWidthUnits=n.getUnits(i.tabWidth),i.tabWidth=n.toInteger(i.tabWidth),null!==i.slideClass&&(i.slideOpenClass=i.slideClass+"-open",i.slideClosedClass=i.slideClass+"-closed",i.slidePreviousClass=i.slideClass+"-previous"),n.sizeAccordion(this,i)?this.each(function(){var e,s,o,a,r=i,d=t(this),l=[],h=-1;e=r.slideWidth-r.tabWidth,s=d.get(0).tagName,o=d.children().get(0).tagName,a=d.children().size(),d.data(t.extend({},{auto:r.auto,interval:null,timeout:r.timeout,trigger:r.trigger,current:r.startingSlide,previous:h,next:n.getNext(a,r.startingSlide),slideClass:r.slideClass,inside:!1,pause:r.pause})),"%"===r.heightUnits&&(r.height="BODY"===d.parent().get(0).tagName?.01*r.height*t(window).height():.01*r.height*d.parent().height(),r.heightUnits="px"),d.children().each(function(i){var n,s,h;s=r.invert?s=(a-1)*r.tabWidth-i*r.tabWidth:i*r.tabWidth,l[i]=s,n=r.invert?10*(a-1-i):10*i,null!==r.slideClass&&t(this).addClass(r.slideClass),t(this).css({top:0,"z-index":n,margin:0,padding:0,"float":"left",display:"block",position:"absolute",overflow:"hidden",width:r.slideWidth+r.widthUnits,height:r.height+r.heightUnits}),"LI"===o&&t(this).css({"text-indent":0}),t(this).css(r.invert?{right:s+r.widthUnits,"float":"right"}:{left:s+r.widthUnits,"float":"left"}),i===r.startingSlide?(t(this).css("cursor","default"),null!==r.slideClass&&t(this).addClass(r.slideOpenClass)):(t(this).css("cursor","pointer"),null!==r.slideClass&&t(this).addClass(r.slideClosedClass),i>r.startingSlide&&!r.invert?(h=i+1,d.children(o+":nth-child("+h+")").css({left:l[h-1]+e+r.widthUnits})):i<r.startingSlide&&r.invert&&(h=i+1,d.children(o+":nth-child("+h+")").css({right:l[h-1]+e+r.widthUnits})))}),d.css({display:"block",height:r.height+r.heightUnits,width:r.width+r.widthUnits,padding:0,position:"relative",overflow:"hidden"}),("UL"===s||"OL"===s)&&d.css({"list-style":"none"}),d.hover(function(){if(d.data("inside",!0),d.data("pause"))try{clearTimeout(d.data("interval"))}catch(t){}},function(){d.data("inside",!1),d.data("auto")&&d.data("pause")&&n.timer(d)}),d.children().bind(r.trigger,function(){if(t(this).index()!==d.data("current")){var i,s,c,u;for(c=h+1,u=d.data("current")+1,0!==c&&null!==r.slideClass&&d.children(o+":nth-child("+c+")").removeClass(r.slidePreviousClass),d.children(o+":nth-child("+u+")"),null!==r.slideClass&&d.children(o+":nth-child("+u+")").addClass(r.slidePreviousClass),h=d.data("current"),d.data("previous",d.data("current")),c=h,c+=1,d.data("current",t(this).index()),u=d.data("current"),u+=1,d.children().css("cursor","pointer"),t(this).css("cursor","default"),null!==r.slideClass&&(d.children().addClass(r.slideClosedClass).removeClass(r.slideOpenClass),t(this).addClass(r.slideOpenClass).removeClass(r.slideClosedClass)),d.data("next",n.getNext(a,t(this).index())),n.timer(d),r.animationStart(),r.invert?d.children(o+":nth-child("+u+")").stop().animate({right:l[d.data("current")]+r.widthUnits},r.speed,r.easing,r.animationComplete):d.children(o+":nth-child("+u+")").stop().animate({left:l[d.data("current")]+r.widthUnits},r.speed,r.easing,r.animationComplete),i=0;a>i;i+=1)s=i+1,i<d.data("current")&&(r.invert?d.children(o+":nth-child("+s+")").stop().animate({right:r.width-s*r.tabWidth+r.widthUnits},r.speed,r.easing):d.children(o+":nth-child("+s+")").stop().animate({left:l[i]+r.widthUnits},r.speed,r.easing)),i>d.data("current")&&(r.invert?d.children(o+":nth-child("+s+")").stop().animate({right:(a-s)*r.tabWidth+r.widthUnits},r.speed,r.easing):d.children(o+":nth-child("+s+")").stop().animate({left:l[i]+e+r.widthUnits},r.speed,r.easing));return!1}}),d.data("auto")&&n.timer(d),r.buildComplete()}):!1):(n.displayError("No child elements available",i.errors),!1):(n.displayError("height must be defined",i.errors),!1)},stop:function(){t(this).data("auto")&&(clearTimeout(t(this).data("interval")),t(this).data("auto",!1))},start:function(){if(!t(this).data("auto")){var i=t(this).data("next")+1;t(this).data("auto",!0),t(this).children(t(this).children().get(0).tagName+":nth-child("+i+")").trigger(t(this).data("trigger"))}},trigger:function(i){(i>=t(this).children().size()||0>i)&&(i=0),i+=1,t(this).children(t(this).children().get(0).tagName+":nth-child("+i+")").trigger(t(this).data("trigger"))},destroy:function(i){var e,n,o=t(this).data("slideClass");return void 0!==i&&(e=void 0!==i.removeStyleAttr?i.removeStyleAttr:!0,n=void 0!==i.removeClasses?i.removeClasses:!1),clearTimeout(t(this).data("interval")),t(this).children().stop().unbind(t(this).data("trigger")),t(this).unbind("mouseenter mouseleave mouseover mouseout"),e&&(t(this).removeAttr("style"),t(this).children().removeAttr("style")),n&&(t(this).children().removeClass(o),t(this).children().removeClass(o+"-open"),t(this).children().removeClass(o+"-closed"),t(this).children().removeClass(o+"-previous")),t(this).removeData(),void 0!==i&&"undefined"!==i.destroyComplete&&("undefined"!=typeof i.destroyComplete.afterDestroy&&i.destroyComplete.afterDestroy(),i.destroyComplete.rebuild)?s.init.apply(this,[i.destroyComplete.rebuild]):void 0
}};return s[i]?s[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("zAccordion: "+i+" does not exist."):s.init.apply(this,arguments)}}(jQuery),function(t){function i(i,e,n,s){var o=i.text().split(e),a="";o.length&&(t(o).each(function(t,i){a+='<span class="'+n+(t+1)+'">'+i+"</span>"+s}),i.empty().append(a))}var e={init:function(){return this.each(function(){i(t(this),"","char","")})},words:function(){return this.each(function(){i(t(this)," ","word"," ")})},lines:function(){return this.each(function(){var e="eefec303079ad17405c889e092e105b0";i(t(this).children("br").replaceWith(e).end(),e,"line","")})}};t.fn.lettering=function(i){return i&&e[i]?e[i].apply(this,[].slice.call(arguments,1)):"letters"!==i&&i?(t.error("Method "+i+" does not exist on jQuery.lettering"),this):e.init.apply(this,[].slice.call(arguments,0))}}(jQuery),$(document).ready(function(){$("#projSlider").zAccordion({width:900,speed:1500,timeout:2e4,slideClass:"slider",animationStart:function(){$("#projSlider").find("li.slide-previous div").fadeOut()},animationComplete:function(){$("#projSlider").find("li.slide-open div").fadeIn()},buildComplete:function(){$("#projSlider").find("li.slide-closed div").css("display","none"),$("#projSlider").find("li.slide-open div").fadeIn()},slideWidth:600,height:400,easing:"easeOutBounce"})}),$(function(){$(".animatetxta").textillate({"in":{shuffle:!0,effect:"bounceInDown",delay:10}}),$(".animatetxtb").textillate({initialDelay:2e3,"in":{delay:15,effect:"fadeInUpBig"}})}),function(t){t.fn.fitText=function(i,e){var n=i||1,s=t.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},e);return this.each(function(){var i=t(this),e=function(){i.css("font-size",Math.max(Math.min(i.width()/(10*n),parseFloat(s.maxFontSize)),parseFloat(s.minFontSize)))};e(),t(window).on("resize",e)})}}(jQuery),window.reset=!1,$(window).mouseleave(function(){window.reset=!0}),$(window).mouseenter(function(){window.reset=!1});var canvas=$("#myCanvas"),canvasHeight,canvasWidth,ctx,pointCollection;document.rotationForce=0,document.Friction=.85,setTimeout(updateCanvasDimensions,50);var myName="Seth Dame",red=[0,100,63],orange=[40,100,60],green=[75,100,40],blue=[196,77,55],purple=[280,50,60],white=[0,0,100],black=[0,0,27],letterColors=[white];drawName(myName,letterColors),bubbleShape="circle",bounceBubbles(),function(t){"use strict";function i(i){return/In/.test(i)||t.inArray(i,t.fn.textillate.defaults.inEffects)>=0}function e(i){return/Out/.test(i)||t.inArray(i,t.fn.textillate.defaults.outEffects)>=0}function n(t){return"true"!==t&&"false"!==t?t:"true"===t}function s(i){var e=i.attributes||[],s={};return e.length?(t.each(e,function(t,i){var e=i.nodeName.replace(/delayscale/,"delayScale");/^data-in-*/.test(e)?(s["in"]=s["in"]||{},s["in"][e.replace(/data-in-/,"")]=n(i.nodeValue)):/^data-out-*/.test(e)?(s.out=s.out||{},s.out[e.replace(/data-out-/,"")]=n(i.nodeValue)):/^data-*/.test(e)&&(s[e.replace(/data-/,"")]=n(i.nodeValue))}),s):s}function o(t){for(var i,e,n=t.length;n;i=parseInt(Math.random()*n),e=t[--n],t[n]=t[i],t[i]=e);return t}function a(t,i,e){t.addClass("animated "+i).css("visibility","visible").show(),t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){t.removeClass("animated "+i),e&&e()})}function r(n,s,r){var d=n.length;return d?(s.shuffle&&(n=o(n)),s.reverse&&(n=n.toArray().reverse()),void t.each(n,function(n,o){function l(){i(s.effect)?h.css("visibility","visible"):e(s.effect)&&h.css("visibility","hidden"),d-=1,!d&&r&&r()}var h=t(o),c=s.sync?s.delay:s.delay*n*s.delayScale;h.text()?setTimeout(function(){a(h,s.effect,l)},c):l()})):void(r&&r())}var d=function(n,o){var a=this,d=t(n);a.init=function(){a.$texts=d.find(o.selector),a.$texts.length||(a.$texts=t('<ul class="texts"><li>'+d.html()+"</li></ul>"),d.html(a.$texts)),a.$texts.hide(),a.$current=t("<span>").html(a.$texts.find(":first-child").html()).prependTo(d),i(o["in"].effect)?a.$current.css("visibility","hidden"):e(o.out.effect)&&a.$current.css("visibility","visible"),a.setOptions(o),a.timeoutRun=null,setTimeout(function(){a.options.autoStart&&a.start()},a.options.initialDelay)},a.setOptions=function(t){a.options=t},a.triggerEvent=function(i){var e=t.Event(i+".tlt");return d.trigger(e,a),e},a["in"]=function(n,o){n=n||0;var d,l=a.$texts.find(":nth-child("+((n||0)+1)+")"),h=t.extend(!0,{},a.options,l.length?s(l[0]):{});l.addClass("current"),a.triggerEvent("inAnimationBegin"),a.$current.html(l.html()).lettering("words"),"char"==a.options.type&&a.$current.find('[class^="word"]').css({display:"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}).each(function(){t(this).lettering()}),d=a.$current.find('[class^="'+a.options.type+'"]').css("display","inline-block"),i(h["in"].effect)?d.css("visibility","hidden"):e(h["in"].effect)&&d.css("visibility","visible"),a.currentIndex=n,r(d,h["in"],function(){a.triggerEvent("inAnimationEnd"),h["in"].callback&&h["in"].callback(),o&&o(a)})},a.out=function(i){var e=a.$texts.find(":nth-child("+((a.currentIndex||0)+1)+")"),n=a.$current.find('[class^="'+a.options.type+'"]'),o=t.extend(!0,{},a.options,e.length?s(e[0]):{});a.triggerEvent("outAnimationBegin"),r(n,o.out,function(){e.removeClass("current"),a.triggerEvent("outAnimationEnd"),o.out.callback&&o.out.callback(),i&&i(a)})},a.start=function(t){setTimeout(function(){a.triggerEvent("start"),function i(t){a["in"](t,function(){var e=a.$texts.children().length;t+=1,!a.options.loop&&t>=e?(a.options.callback&&a.options.callback(),a.triggerEvent("end")):(t%=e,a.timeoutRun=setTimeout(function(){a.out(function(){i(t)})},a.options.minDisplayTime))})}(t||0)},a.options.initialDelay)},a.stop=function(){a.timeoutRun&&(clearInterval(a.timeoutRun),a.timeoutRun=null)},a.init()};t.fn.textillate=function(i,e){return this.each(function(){var n=t(this),o=n.data("textillate"),a=t.extend(!0,{},t.fn.textillate.defaults,s(this),"object"==typeof i&&i);o?"string"==typeof i?o[i].apply(o,[].concat(e)):o.setOptions.call(o,a):n.data("textillate",o=new d(this,a))})},t.fn.textillate.defaults={selector:".texts",loop:!1,minDisplayTime:2e3,initialDelay:0,"in":{effect:"fadeInLeftBig",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},out:{effect:"hinge",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},autoStart:!0,inEffects:[],outEffects:["hinge"],callback:function(){},type:"char"}}(jQuery);