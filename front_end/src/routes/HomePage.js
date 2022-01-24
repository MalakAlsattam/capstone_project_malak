import React from "react";
import "../CSS/in.css"
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/Home.css'
import { Link } from "react-router-dom";

export default function HomePage() {

  return (

    <div>

      <h1>We Are Here For You ..</h1>
      <div class="card-master">


        <div class="row g-0">
          <div class="col-md-4">
            <img height={700} src="https://images.unsplash.com/photo-1541996206728-9e1c3466a148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">Mood Disorders</h4>
              <p class="card-text">Living with a mood disorder can be exceptionally challenging,
                and even more so if you don’t have a supportive community to help you face it.
                Mood disorders, also known as emotional disorders, are largely invisible to those around us,
                and sharing it can result in disapproval, misunderstandings,
                and platitudes that aren’t helpful to those fighting them. With proper help and management,
                those suffering from emotional disorders can lead happy, productive live</p>
              <h4 class="card-title">Did You Know?</h4>
              <p class="card-text">Mood disorders and anxiety commonly coexist and can exacerbate each other when
                they occur together. Those who are struggling with these disorders tend to have difficulty recovering
                from circumstances that damage their morale and faith in themselves. Anxiety creates a deep need for
                protection or reassurance in those who suffer from it, and when those needs go unmet, it is easier
                for them to spiral into a deep depression that becomes self-feeding. 350 million people all over the
                world suffer from anxiety and depression.</p>
              <h4 class="card-title">What Are The Common Types Of Mood Disorders?</h4>
              <p class="card-text">The term “mood disorder” or “emotional disorder” actually covers a range of
                conditions that include the well-known bipolar disorder and postpartum depression, as well as the
                prevalent “major depression.” There are milder cases of mood disorders as well, including one known
                as dysthymia, which describes a mild form of depression that doesn’t have a direct impact on an
                individual’s daily life.</p>
              <h5>If you think you may be suffering from a mood disorder, you don’t have to live a life ruled by
                an emotional disorder,
                get in touch with your physician today for an assessment.</h5>
            </div>
          </div>
        </div>
      </div>



      <div class="card-master">
        <h1>We Are Here For You ..</h1>
        <div class="row g-0">
          <div class="col-md-4">
            <img className="image" height={520} width={470} src="https://images.unsplash.com/photo-1465321897912-c692b37a09a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title">Depression</h4>
              <p class="card-text">Depression, also referred to as Major Depressive Disorder (MDD),
                is a mental health condition that affects a person’s actions, feelings,  The symptoms of depression
                are very difficult to handle and often interfere with one’s ability to perform everyday activities
                and fully enjoy one’s life. </p>
              <h4 class="card-title">Did You Know?</h4>
              <p class="card-text">Individual or group therapy sessions that focus on building skills can be helpful.
                A commonly used type of therapy, cognitive-behavioral therapy</p>
              <h4 class="card-title"></h4>
              <p class="card-text">
                People often think of depression as an adult problem, not something that affects children,
                but children, especially adolescents may commonly suffer from depression. The condition interferes
                with their ability to perform well in school and develop and maintain relationships, and can have
                lasting repercussions, especially if it goes unnoticed. What’s more, in children and adolescents,
                depression is often accompanied by behavioral problems,  other mental disorders. Unfortunately,
                in children and adolescents, depression can manifest differently than it does in adults, so parents
                are not always able to recognize the problem.</p>

            </div>
          </div>
        </div>
      </div>

      <div className="last-thing">
        <br></br>
        <h4 class="card-title">if you need some help talk with Specialist</h4>
        <br></br>
        <Link to="/AllSpecialist"><button type="button" class="btn btn-outline-light"> go to see the all Specialist </button></Link>
        <br></br><br></br>
      </div>
      <footer class="navbar navbar-dark bg-dark">
       
       <p> &copy; 2022 MALAK &nbsp;&nbsp;
         <a href="https://github.com/MalakAlsattam" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
         </svg></a>
       </p>
     </footer>

    </div>

  );
}