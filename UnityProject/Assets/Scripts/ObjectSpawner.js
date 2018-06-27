//This script is a quick fix for a common misunderstanding with Unity Prefabs.
//You can't have a prefab inside a prefab, without having to update every
//single nested prefab. The prescribed workaround for this is to have an
//object that spawns the prefab from .Resources or a scene set var.

//This also has an optimization effect, since Receiver by default loads in
//several hundred instances of the same object, then deletes them at random.
var myobj : GameObject; //The object to spawn
function Start(){
	var newobj = Instantiate(myobj,this.transform.position,Quaternion.identity);
	newobj.transform.parent = this.transform.parent; //Maintain scene hierarchy
	Destroy(this.gameObject);
}