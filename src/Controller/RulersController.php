<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RulersController extends AbstractController
{
    #[Route('/rulers', name: 'app_rulers')]
    public function index(): Response
    {
        return $this->render('rulers/index.html.twig', [
            'controller_name' => 'RulersController',
        ]);
    }
}
