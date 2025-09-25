// Create web server
function skillsComments(){
    return {
        restrict: 'E',
        templateUrl: 'views/skills/comments.html',
        scope: {
            comments: '='
        }
    };
}