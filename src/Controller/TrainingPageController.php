<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TrainingPageController extends AbstractController
{
    #[Route('/training/page', name: 'app_training_page')]
    public function index(): Response
    {
        return $this->render('training_page/index.html.twig', [
            'controller_name' => 'TrainingPageController',
        ]);
    }
}
