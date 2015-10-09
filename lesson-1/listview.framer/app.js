PSD = Framer.Importer.load("imported/listview")

PSD["cell1"].scaleX = 0;
PSD["cell2"].scaleX = 0;
PSD["cell3"].scaleX = 0;

PSD["cell1"].originX = 0;
PSD["cell2"].originX = 0;
PSD["cell3"].originX = 0;

PSD["cell1"].states.add({
	second: {scaleX: 1.0}
})

PSD["cell2"].states.add({
	second: {scaleX: 1.0}
})

PSD["cell3"].states.add({
	second: {scaleX: 1.0}
})

PSD["cell1"].states.animationOptions = {
	curve: "spring(200, 20, 10)"
}

PSD["cell2"].states.animationOptions = {
	curve: "spring(200, 20, 10)"
}

PSD["cell3"].states.animationOptions = {
	curve: "spring(200, 20, 10)"
}

PSD["title-cell"].on(Events.Click, function() {
	PSD["cell1"].states.next();
	PSD["cell2"].states.next();
	PSD["cell3"].states.next();
})