
const ListPage = async() => {
	// destructure
	let {result,error} = await query({type:'animals_by_user_id',params:[sessionStorage.userId]});

	if(error) {
		console.log(error);
		return;
	}
	$("page-list .animallist").html(makeAnimallist(result));
}

const RecentPage = async() => {
	console.log("honk")
}



const UserProfilePage = async() => {
	let {result,error} = await query({type:'user_by_id',params:[sessionStorage.userId]});

	if(error) {
		console.log(error);
		return;
	}
	let [user] = result;
	$("#page-user-profile [data-role='main']").html(makeUserProfile(user));

}



const AnimalProfilePage = async() => {
	let {result,error} = await query({type:'animal_by_id',params:[sessionStorage.animalId]});

	if(error) {
	console.log(error);
	return;
	}
	let [animal] = result;
	$(".animal-profile-top img").attr("src",animal.img);
}