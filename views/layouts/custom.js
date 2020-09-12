
class page {
	function(){
		var currentPage = req.query.page;
		var previousPAge = currentPage + 1;
		var nextPage = currentPage - 1;
	}
}
module.exports.page;

