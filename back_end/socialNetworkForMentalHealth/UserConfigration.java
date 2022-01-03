//package com.example.socialNetworkForMentalHealth;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//    @EnableWebSecurity
//    public class UserConfigration extends WebSecurityConfigurerAdapter {
//
//        @Autowired
//       // RestAuthEntryPoint restAuthEntryPoint;
//        UserDetailsService userDetailsService;
//
//        @Override
//        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//            auth.userDetailsService(userDetailsService);
//        }
//
//        @Override
//        protected void configure(HttpSecurity http) throws Exception {
//            http.csrf().disable();
//            http.authorizeRequests()
//                   // .antMatchers("/api/specialist").hasAnyRole("ADMIN", "USER")
////                    .antMatchers("/api/user").hasAnyRole("ADMIN", "USER")
////
////                    .antMatchers("/api/user/add").hasAnyRole("ADMIN", "USER")
////                    .antMatchers("/").permitAll()
////                    .and().formLogin();
//
//                    .antMatchers("/**").hasRole("ADMIN")
//                    .and()
//                    .exceptionHandling()
//                 //   .authenticationEntryPoint(restAuthEntryPoint)
//                    .and()
//                    .formLogin().loginProcessingUrl("/api/specialist/add");
//        }
//
//        @Bean
//        public PasswordEncoder getPasswordEncoder() {
//            return NoOpPasswordEncoder.getInstance();
//        }
//    }
