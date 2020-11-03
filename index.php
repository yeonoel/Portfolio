
<?php

$name = $email = $subject = $messages = "";
$nameError = $emailError = $subjectError = $messagesError = "";
$isSuccess = false;
$emailTo = "yeopevroguinoel@gmail.com";


if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $name = verifyInput($_POST["name"]);
    $email = verifyInput($_POST["email"]);
    $subject = verifyInput($_POST["subject"]);
    $messages = verifyInput($_POST["messages"]);
    $isSuccess = true;
    $emailText = "";

    if (empty($name)) {
        $nameError = "Please enter your name";
        $isSuccess = false;
    }else{
        $emailText .= "name:$name \n";
    }
    if (empty($email)) {
        $emailError = "Please enter your email";
        $isSuccess = false;
    }else{
        $emailText .= "email:$email \n";
    }
    if (empty($subject)) {
        $subjectError = "Please enter your subject";
        $isSuccess = false;
    }else{
        $emailText .= "subject:$subject \n";
    }
    if (empty($messages)) {
        $messagesError = "Please enter your messages";
        $isSuccess = false;
    }else{
        $emailText .= "message:$messages \n";
    }
    if (!isEmail($email)) {
    $emailError = "invalid email";
    $isSuccess = false;
    }
    if ($isSuccess) {
        $headers = "From: $name <$email> \r\nReply-To $email ";
        mail($emailTo, "a message from your website", $emailText, $headers);
        $name = $email = $subject = $messages = "";
       
    }


}



function isEmail($var){
    return filter_var($var, FILTER_VALIDATE_EMAIL);
};


function verifyInput ($var){
    $var = trim($var);
    $var = stripslashes($var);
    $var = htmlspecialchars($var);
    return $var;

}


?>



<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=divice-width", initial-scale=1.0 >
        <title>Personnal Portfolio Website</title>
        <link rel="stylesheet" href="style.css"/>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

        
    </head>
    <body>
        <div class="scroll-up-btn">
            <i class="fas fa-angle-up"></i>
        </div>
        <nav class="navbar">
            <div class="max-width">
                <div class="logo"><a href="#">Portfo<span>lio.</span></a> </div>
                <ul class="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#teams">Teams</a></li>
                    <li><a href="#contact">contacts</a></li>
                </ul>
                <div class="menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
        <!-- home section start  -->
        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">Hello, my name is</div>
                    <div class="text-2">Pevrogui Noel</div>
                    <div class="text-3">And I'm a <span class="typing" >Developer front</span> </div>
                    <a href="">Hire me</a>
                </div>    
            </div>
        </section>
        <!-- about section start -->

        <section class="about" id="about">
            <div class="max-width">
                <h1 class="title">About me</h1>
                <div class="about-content">
                    <div class="column left">
                        <img src="images/profil-1.jpg" alt="">
                    </div>
                    <div class="column right">
                        <div class="text">I'm Pevrogui and I'm a <span class="typing-2">Developpeur Front</span></div>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla ligula vitae condimentum egestas. Mauris sed
                        ultrices ante, quis ornare velit. Curabitur tempus tincidunt dui, et iaculis est molestie non. Vestibulum cursus commodo
                        velit. Maecenas et aliquam ligula, quis aliquet leo. Pellentesque eleifend id nunc non pharetra. Nam dui diam, ornare eu
                        enim aliquet, laoreet sollicitudin odio. Phasellus euismod egestas augue, at sagittis turpis ultrices eget. Donec eget
                        nulla efficitur, efficitur purus id, vulputate turpis.  </p>
                        <a href="#">Download Cv</a>
                    </div>

                </div>
            </div>
        </section>


        <!-- services section start -->
        
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title">My Services</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <i class="fas fa-paint-brush"></i>
                            <div class="text">Web Design</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper non mauris vehicula accumsan. Aenean
                                feugiat cursus massa a pulvinar</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <i class="fas fa-chart-line"></i>
                            <div class="text">Advertising</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper non mauris vehicula accumsan.
                                Aenean
                                feugiat cursus massa a pulvinar</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <i class="fas fa-code"></i>
                            <div class="text">Apps Design</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper non mauris vehicula accumsan.
                                Aenean
                                feugiat cursus massa a pulvinar</p>
                        </div>
                    </div>
        
                </div>
            </div>
        </section>

        <!-- skills section start  -->
        <section class="skills" id="skills">
            <div class="max-width">
                <h2 class="title"> My Skills</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">My creation skills & experiences.</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper non mauris vehicula accumsan.
                        Aenean
                        feugiat cursus massa a pulvinarLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper non mauris vehicula accumsan.
                        Aenean
                        feugiat cursus massa a pulvinarLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper non mauris vehicula accumsan.
                        Aenean
                        feugiat cursus massa a pulvinar</p>
                        <a href="">Read me</a>
                    </div>
                    <div class="column right">
                        <div class="bars">
                            <div class="info">
                                    <span>HTML</span>
                                    <span>90%</span>
                                    
                            </div>
                            <div class="line html"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>CSS</span>
                                <span>80%</span>
                                
                            </div>
                            <div class="line css"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>javaScript</span>
                                <span>60%</span>
                                
                            </div>
                            <div class="line js"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>PHP</span>
                                <span>50%</span>
                                
                            </div>
                            <div class="line php"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>MySql</span>
                                <span>40%</span>
                                
                            </div>
                            <div class="line mysql"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>


        <!-- Teams section starts
        <section class="teams" id="teams">
            <div class="max-width">
                <h2 class="title">My teams</h2>
            </div>
        </section> -->

        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contact me</h2>
                <div class="contact-content">
                    <div class="column left">
                            <div class="text">Get in Touch</div>
                            <p>Aenean
                            feugiat cursus massa a pulvinarLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper non mauris
                            vehicula accumsan.
                            Aenean
                            feugiat cursus massa a pulvinarLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper non mauris
                            vehicula accumsan.
                            Aenean
                            feugiat cursus massa a pulvinar</p>
                        
                        <div class="icons">
                            <div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Name</div>
                                    <div class="sub-title">Pevrogui Noel</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Adress</div>
                                    <div class="sub-title">Cote D'ivoire, Abidjan</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">yeopevroguinoel@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="column right">
                        <div class="text">Message me</div>
                        <form method= "POST" action="<?php  echo htmlspecialchars($_SERVER['PHP_SELF']);  ?>  ">
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" placeholder="name" name="name" class="input1"  >
                                    <p><?php echo '<span>'.$nameError.'</span>';?></p>
                                </div>
                                <div class="field email">
                                    <input type="email" placeholder="*Email" name="email"  >
                                    <p><?php echo '<span>'.$emailError.'</span>';?></p>
                                </div>
                            </div>
                                <div class="field">
                                    <input type="text" placeholder="*subject" name="subject" >
                                    <p><?php echo '<span>'.$subjectError.'</span>';?></p>
                                </div>
                                <div class="field textarea">
                                    <textarea name="messages" id="" cols="30" rows="10" placeholder="*describ project" ></textarea>
                                    <p><?php echo '<span>'.$messagesError.'</span>';?></p>
                                </div>
                                <div class="button">
                                    <button type="submit">send message</button>
                                </div>
                                <div>
                                    <p style="display: <?php if ($isSuccess) echo 'block' ;else echo 'none';?>"> thinks you for contacting me I will answer you very quickly. </p>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- footer section start -->
        <footer>
            <span>Created By <a href="#">CodingKenel</a></span>  <span class="far fa-copyright"></span> <span> 2020 All rights reserved.</span>
        </footer>
        
    <script src="script.js"></script>
</body>
</html>