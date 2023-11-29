package com.rayen.users.restControllers;
import com.rayen.users.entities.Role;
import com.rayen.users.entities.User;
import com.rayen.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
//@CrossOrigin(origins = "http://localhost:4200")

public class UserRestController {
    @Autowired
    UserService userService;
    @RequestMapping(path = "all", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    @RequestMapping(path = "addUser", method = RequestMethod.POST)
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @RequestMapping(path="deleteUser/{id}",method=RequestMethod.DELETE)
    public void deleteUserById(@PathVariable long id) {
        userService.deleteUser(id);
    }

    @RequestMapping(path="addRole/{id}",method=RequestMethod.POST)
    public User addRoleToUser(@PathVariable long id,@RequestBody Role r) {
        return userService.addRoleToUser(id, r);
    }

    @RequestMapping(path="getUser/{id}",method=RequestMethod.GET)
    public User findUserById(@PathVariable Long id) {
        return userService.findUserById(id);
    }

    @RequestMapping(path="allRoles",method=RequestMethod.GET)
    public List<Role> getAllRoles() {
        return userService.findAllRoles();
    }

    @RequestMapping(path="role/{id}",method=RequestMethod.GET)
    public Role findRoleById(@PathVariable Long id) {
        return userService.findRoleById(id);
    }
    @RequestMapping(path="removeRole/{id}",method=RequestMethod.POST)
    public User removeRole(@PathVariable long id,@RequestBody Role r)
    {

        return  userService.removeRoleFromUser(id,r);
    }

}