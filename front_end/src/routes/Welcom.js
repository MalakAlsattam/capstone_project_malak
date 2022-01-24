import React from "react";
// import '../CSS/Post.css'
import { Outlet, Link } from "react-router-dom";
import swal from "sweetalert"

// import '../CSS/Home.css'

export default function Welcome() {
    return (<div>
        <nav class="navbar navbar-dark bg-dark">

            <img src="https://t3.ftcdn.net/jpg/01/90/34/42/240_F_190344269_CCb6WX2CgD60Hl1Y9aVrW8ChdwCCrjCu.jpg" width={80} height={60}></img>
            <Link class="text-muted" to="/LogInPage" >
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                </svg> </Link> |{" "}

            <Link class="text-muted" to="/HomePage"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg></Link>|{" "}

            <Link class="text-muted" to="/Specialist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z" />
            </svg> </Link>|{" "}
            <Link class="text-muted" to="/AllSpecialist">AllSpecialist</Link>|{" "}
            <Link class="text-muted" to="/Post">Post</Link>|{" "}
            <Link class="text-muted" to="/AllPost">AllPost</Link>|{" "}
            <Link class="text-muted" to="/PersonalExperience"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg></Link>|{" "}
            <Link class="text-muted" to="/AllPersonalExperience">AllPersonalExperience</Link>|{" "}
            <button type="button" class="btn btn-outline-light" onClick={() => { localStorage.setItem("logIn", ""); localStorage.setItem("username", ""); swal("YOU ARE LOG OUT") }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path fill-rule="evenodd" d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
                </svg></button>
        </nav>
        <Outlet />

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
       
     
</div>


        <footer class="navbar navbar-dark bg-dark">

            <p > &copy; 2022 MALAK &nbsp;&nbsp;
                <a href="https://github.com/MalakAlsattam" class="text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg></a>
            </p>
        </footer>
    </div>
    )
}