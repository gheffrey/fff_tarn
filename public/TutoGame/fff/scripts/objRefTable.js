const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.bound,
		C3.Behaviors.EightDir,
		C3.Behaviors.solid,
		C3.Behaviors.MoveTo,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Behaviors.Persist,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{ArrièreplanRépété: 0},
	{GlisserDéposer: 0},
	{LimitéÀLaScène: 0},
	{"8Directions": 0},
	{Solide: 0},
	{DéplacerVers: 0},
	{blues: 0},
	{Souris: 0},
	{nbrJoueurs: 0},
	{Persister: 0},
	{joueurs: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Restart: 0}
];

self.InstanceType = {
	ArrièreplanRépété: class extends self.ITiledBackgroundInstance {},
	blues: class extends self.ISpriteInstance {},
	Souris: class extends self.IInstance {},
	joueurs: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Restart: class extends self.ITextInstance {}
}