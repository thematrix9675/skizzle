function BounceOff(b){
	var x= b.x%BS;
	var y= b.y%BS;
	if(x<(BS/4)||x>BS-(BS/4))
		b.vX=-b.vX;
	if(y<(BS/4)||y>BS-(BS/4))
		b.vY=-b.vY;
}
