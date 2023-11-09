<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MyProfilPageController extends AbstractController
{
    #[Route('/my/profil/page', name: 'app_my_profil_page')]
    public function index(): Response
    {
        return $this->render('my_profil_page/index.html.twig', [
            'controller_name' => 'MyProfilPageController',
        ]);
    }
}
